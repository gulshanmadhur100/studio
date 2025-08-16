"use client";

import React from "react";
import { Button } from "./ui/button";
import { SignupDialog } from "./signup-dialog";

export function SignupButton() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsDialogOpen(true)}>Sign up</Button>
      <SignupDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
