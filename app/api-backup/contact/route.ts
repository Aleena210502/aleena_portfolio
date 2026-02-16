import { NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/mongodb"
import Contact from "@/models/Contact"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const validatedData = contactSchema.parse(body)
    
    await connectToDatabase()
    
    const contact = new Contact(validatedData)
    await contact.save()
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Message sent successfully!" 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to send message. Please try again later." 
      },
      { status: 500 }
    )
  }
}
