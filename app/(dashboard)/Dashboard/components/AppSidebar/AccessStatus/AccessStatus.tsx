"use client";
import { Badge } from "@/components/ui/badge";
import StatusFreeTrial from "./StatusFreeTrial/StatusFreeTrial";
import { StatusPaid } from "./StatusPaid"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function AccessStatus() {

    const [open, setOpen] = useState(false);

    const hasPaid = false;
    const statusFree = true;


    if (hasPaid) {
        return <StatusPaid />
    }

    if (statusFree) {
        return <StatusFreeTrial />
    }

    const handleOpenChange = () => {
        setOpen(!open);
    };

    return (
        <div className="p-4 border-white bg-purple-800/20 border rounded-md">
            <h3 className="font-semibold text-xl mb-1">⛔ Plan no activated</h3>
            <Badge className="w-full py-1 bg-red-700">Limited Access</Badge>
            <p className="text-xs mt-2 mb-3">You have used you free trial</p>

            <Dialog open={open} onOpenChange={handleOpenChange}>
                <DialogTrigger asChild>
                    <Button className="w-full font-semibold text-purple-700" variant="secondary">Unlock fro 9,99$</Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                    <DialogHeader>
                        <DialogTitle className="hidden">Purchase</DialogTitle>
                        <div id="checkout-modal" className=" min-h[600px]"/>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
