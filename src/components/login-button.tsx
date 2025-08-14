"use client";

import React from "react";
import { Button } from "./ui/button";
import { LoginDialog } from "./login-dialog";

export function LoginButton() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)}>Log in</Button>
      <LoginDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
