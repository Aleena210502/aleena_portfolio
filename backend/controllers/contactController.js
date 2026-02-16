const Contact = require("../models/Contact")
const { z } = require("zod")

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const submitContact = async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body)
    
    const contact = new Contact(validatedData)
    await contact.save()
    
    res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    })
  } catch (error) {
    console.error("Contact form error:", error)
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      })
    }
    
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later."
    })
  }
}

const getContacts = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query
    const filter = status ? { status } : {}
    
    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
    
    const total = await Contact.countDocuments(filter)
    
    res.status(200).json({
      success: true,
      data: contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error("Get contacts error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts"
    })
  }
}

const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body
    
    if (!["unread", "read", "replied"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status"
      })
    }
    
    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    )
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found"
      })
    }
    
    res.status(200).json({
      success: true,
      data: contact,
      message: "Contact status updated successfully"
    })
  } catch (error) {
    console.error("Update contact error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to update contact"
    })
  }
}

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params
    
    const contact = await Contact.findByIdAndDelete(id)
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found"
      })
    }
    
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully"
    })
  } catch (error) {
    console.error("Delete contact error:", error)
    res.status(500).json({
      success: false,
      message: "Failed to delete contact"
    })
  }
}

module.exports = {
  submitContact,
  getContacts,
  updateContactStatus,
  deleteContact
}
