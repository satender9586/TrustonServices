"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EnqueryPopUp = ({children}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // setOpen(true);
    }, 2 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <form>
        <DialogTrigger asChild>
          {
            children
          }
        </DialogTrigger>

        <DialogContent className="sm:max-w-[500px] bg-white rounded-xl p-6 shadow-2xl border border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#AF0D5A] text-center">
              Service Enquiry
            </DialogTitle>
            <DialogDescription className="text-center text-gray-500">
              Fill out the form below and we’ll reach out to you shortly.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-5 mt-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm text-gray-700 font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your full name"
                className="rounded-md border-gray-300 focus:border-[#AF0D5A] focus:ring-[#AF0D5A]"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-sm text-gray-700 font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="e.g. 9876543210"
                type="tel"
                className="rounded-md border-gray-300 focus:border-[#AF0D5A] focus:ring-[#AF0D5A]"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="serviceType" className="text-sm text-gray-700 font-medium">
                Service Type
              </Label>
              <Select name="serviceType" >
                <SelectTrigger
                  id="serviceType"
                  className="w-full rounded-md border-gray-300 focus:border-[#AF0D5A] focus:ring-[#AF0D5A]"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="w-full bg-white">
                  <SelectItem value="ac-split">Split AC</SelectItem>
                  <SelectItem value="ac-window">Window AC</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message" className="text-sm text-gray-700 font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe your issue or request..."
                rows={4}
                className="rounded-md border-gray-300 focus:border-[#AF0D5A] focus:ring-[#AF0D5A]"
              />
            </div>
          </div>

          <DialogFooter className="mt-6 flex justify-end gap-3">
            <DialogClose asChild>
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="rounded-full border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={() => setOpen(false)}
              className="bg-[#AF0D5A] hover:bg-[#93064b] text-white rounded-full font-medium"
            >
              Submit Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default EnqueryPopUp;
