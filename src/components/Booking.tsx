import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Reveal } from "@/components/Reveal";
import { contactInfo } from "@/config/contact";

const Booking = () => {
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>();
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "",
    guests: "",
    message: "",
  });

  // Mock unavailable dates - in production this would come from an API
  const unavailableDates = [
    new Date(2024, 11, 20),
    new Date(2024, 11, 21),
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
    new Date(2024, 11, 30),
    new Date(2024, 11, 31),
  ];

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some(
      (unavailableDate) =>
        date.toDateString() === unavailableDate.toDateString()
    );
  };

  const handleArrivalDateSelect = (date: Date | undefined) => {
    if (date && isDateUnavailable(date)) {
      toast({
        title: "תאריך לא זמין",
        description: "תאריך ההגעה שבחרת תפוס, אנא בחר תאריך אחר",
        variant: "destructive",
      });
      return;
    }
    if (date && departureDate && date >= departureDate) {
      toast({
        title: "תאריך לא תקין",
        description: "תאריך ההגעה חייב להיות לפני תאריך העזיבה",
        variant: "destructive",
      });
      return;
    }
    setArrivalDate(date);
  };

  const handleDepartureDateSelect = (date: Date | undefined) => {
    if (date && isDateUnavailable(date)) {
      toast({
        title: "תאריך לא זמין",
        description: "תאריך העזיבה שבחרת תפוס, אנא בחר תאריך אחר",
        variant: "destructive",
      });
      return;
    }
    if (date && arrivalDate && date <= arrivalDate) {
      toast({
        title: "תאריך לא תקין",
        description: "תאריך העזיבה חייב להיות אחרי תאריך ההגעה",
        variant: "destructive",
      });
      return;
    }
    setDepartureDate(date);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!arrivalDate || !departureDate) {
      toast({
        title: "יש לבחור תאריכים",
        description: "אנא בחר תאריכי הגעה ועזיבה",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.phone || !formData.roomType) {
      toast({
        title: "שדות חובה חסרים",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive",
      });
      return;
    }

    // Prepare email content
    const emailSubject = encodeURIComponent(`הזמנה חדשה - ${formData.roomType === 'suite' ? 'סוויטה' : 'צימר'}`);
    const emailBody = encodeURIComponent(`
הזמנה חדשה מ-Black Diamond

פרטי הלקוח:
שם: ${formData.name}
טלפון: ${formData.phone}
אימייל: ${formData.email || 'לא צוין'}

פרטי ההזמנה:
תאריך הגעה: ${arrivalDate ? format(arrivalDate, "dd/MM/yyyy") : 'לא נבחר'}
תאריך עזיבה: ${departureDate ? format(departureDate, "dd/MM/yyyy") : 'לא נבחר'}
סוג חדר: ${formData.roomType === 'suite' ? 'סוויטה' : 'צימר'}
מספר אורחים: ${formData.guests || 'לא צוין'}

הודעה נוספת:
${formData.message || 'אין הודעה נוספת'}
    `.trim());

    // Open email client
    window.location.href = `mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`;

    toast({
      title: "ההזמנה נשלחה!",
      description: "נחזור אליך בהקדם כדי לאשר את ההזמנה",
    });

    // Reset form
    setArrivalDate(undefined);
    setDepartureDate(undefined);
    setFormData({
      name: "",
      phone: "",
      email: "",
      roomType: "",
      guests: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  return (
    <div className="w-full overflow-x-hidden">
      <Reveal direction="fade-up" delay={0.2} width="100%">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Booking Form */}
          <Card className="border border-primary/20 hover:border-primary/50 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-500">
              <CardHeader>
              <CardDescription className="text-muted-foreground text-center text-sm sm:text-base md:text-lg px-2">
                מלאו את פרטיכם ונחזור אליכם בהקדם לאשר הזמנה
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Arrival Date */}
                  <div className="space-y-2">
                    <Label>תאריך הגעה *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-right font-normal ${
                            !arrivalDate ? "text-muted-foreground" : ""
                          }`}
                        >
                          <CalendarIcon className="ml-2 h-4 w-4" />
                          {arrivalDate ? format(arrivalDate, "dd/MM/yyyy") : "בחר תאריך הגעה"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                          mode="single"
                          selected={arrivalDate}
                          onSelect={handleArrivalDateSelect}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today || isDateUnavailable(date);
                  }}
                  modifiers={{
                    unavailable: unavailableDates,
                  }}
                  modifiersClassNames={{
                    unavailable: "bg-red-500/50 text-white line-through",
                  }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Departure Date */}
                  <div className="space-y-2">
                    <Label>תאריך עזיבה *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-right font-normal ${
                            !departureDate ? "text-muted-foreground" : ""
                          }`}
                        >
                          <CalendarIcon className="ml-2 h-4 w-4" />
                          {departureDate ? format(departureDate, "dd/MM/yyyy") : "בחר תאריך עזיבה"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={departureDate}
                          onSelect={handleDepartureDateSelect}
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            if (arrivalDate) {
                              return date <= arrivalDate || date < today || isDateUnavailable(date);
                            }
                            return date < today || isDateUnavailable(date);
                          }}
                          modifiers={{
                            unavailable: unavailableDates,
                          }}
                          modifiersClassNames={{
                            unavailable: "bg-red-500/50 text-white line-through",
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">שם מלא *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="הכנס שם מלא"
                      required
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">טלפון *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="050-1234567"
                      required
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">אימייל</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roomType">סוג חדר *</Label>
                    <Select
                      value={formData.roomType}
                      onValueChange={(value) => handleInputChange("roomType", value)}
                      required
                    >
                      <SelectTrigger className="text-right" id="roomType">
                        <SelectValue placeholder="בחר סוג חדר" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suite">סוויטה</SelectItem>
                        <SelectItem value="cabin">צימר</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">מספר אורחים</Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => handleInputChange("guests", value)}
                    >
                      <SelectTrigger className="text-right" id="guests">
                        <SelectValue placeholder="בחר מספר אורחים" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 אורחים</SelectItem>
                        <SelectItem value="3">3 אורחים</SelectItem>
                        <SelectItem value="4">4 אורחים</SelectItem>
                        <SelectItem value="5+">5+ אורחים</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">הודעה נוספת</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="הוסף פרטים נוספים או בקשות מיוחדות..."
                      className="text-right min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base sm:text-lg py-5 sm:py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:scale-105"
                  >
                    שלח הזמנה
                  </Button>
                </form>
              </CardContent>
            </Card>
        </div>
      </Reveal>
      </div>
  );
};

export default Booking;

