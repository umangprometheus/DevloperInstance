import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 5pm",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "123 Business St, Suite 100",
    description: "San Francisco, CA 94102",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="h-5 w-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium" data-testid="text-response-time">Response within 24 hours</p>
          <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 5pm PST</p>
        </div>
      </div>

      {contactMethods.map((method, index) => {
        const Icon = method.icon;
        return (
          <Card key={index} className="hover-elevate transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1" data-testid={`text-contact-${method.title.toLowerCase()}-title`}>
                    {method.title}
                  </h3>
                  <p className="text-sm font-medium mb-1" data-testid={`text-contact-${method.title.toLowerCase()}-value`}>
                    {method.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
