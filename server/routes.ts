import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const readableError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          message: readableError.message 
        });
      }

      const submission = await storage.createContactSubmission(validationResult.data);
      
      console.log("New contact submission received:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        subject: submission.subject,
        createdAt: submission.createdAt,
      });

      res.status(201).json({ 
        success: true, 
        message: "Your message has been received. We'll get back to you within 24 hours.",
        submissionId: submission.id 
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to submit your message. Please try again later." 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to fetch submissions" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
