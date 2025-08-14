"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import React from "react";

export function LoginDialog({ children }: { children?: React.ReactNode }) {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const role = formData.get("role");
    const password = formData.get("password");

    // Here you would typically handle the login logic,
    // for example, by calling an API endpoint.
    console.log({ role, password });
    
    toast({
      title: "Login Attempted",
      description: `You tried to log in as ${role}.`,
    });

    // NOTE: We are not closing the dialog on submission for this example.
    // To close it, you would manage an 'open' state and set it to false here.
  };
  
  const trigger = children ? (
      <DialogTrigger asChild>{children}</DialogTrigger>
  ) : (
      <DialogTrigger asChild>
          <Button>Log in</Button>
      </DialogTrigger>
  );


  return (
    <Dialog>
      {trigger}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log in</DialogTitle>
          <DialogDescription>
            Select your role and enter your password to continue.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select name="role" defaultValue="customer">
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                  <SelectItem value="trainer">Trainer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" name="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Log in</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
