import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters"),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      agreeToPrivacy: false,
    },
  });

  const messageLength = form.watch("message")?.length || 0;

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      form.reset();
    }, 3000);
  };

  if (isSuccess) {
    return (
      <Card className="shadow-xl" id="contact-form">
        <CardContent className="p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-chart-2/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-chart-2" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3" data-testid="text-success-title">
            Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground mb-2" data-testid="text-success-message">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <p className="text-sm text-muted-foreground">
            Check your email for a confirmation.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl" id="contact-form">
      <CardHeader className="space-y-2 pb-6">
        <CardTitle className="text-2xl">Send us a message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      data-testid="input-name"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                      data-testid="input-email"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12" data-testid="select-subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general" data-testid="select-subject-general">General Inquiry</SelectItem>
                      <SelectItem value="support" data-testid="select-subject-support">Technical Support</SelectItem>
                      <SelectItem value="feedback" data-testid="select-subject-feedback">Feedback</SelectItem>
                      <SelectItem value="partnership" data-testid="select-subject-partnership">Partnership</SelectItem>
                      <SelectItem value="other" data-testid="select-subject-other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      className="resize-y min-h-32"
                      {...field}
                      data-testid="textarea-message"
                    />
                  </FormControl>
                  <FormDescription className="flex justify-between items-center">
                    <span>Share your thoughts, questions, or feedback.</span>
                    <span className="text-xs" data-testid="text-character-count">
                      {messageLength}/500
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agreeToPrivacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      data-testid="checkbox-privacy"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-primary hover:underline"
                        data-testid="link-privacy-policy"
                      >
                        privacy policy
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12"
              disabled={isSubmitting}
              data-testid="button-submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
