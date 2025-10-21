
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { contactsAPI, Contact } from "@/services/api";
import { toast } from "sonner";
import { Trash2, Check, X } from "lucide-react";

interface ContactsManagerProps {
  contacts: Contact[];
  onUpdate: () => void;
}

const ContactsManager = ({ contacts, onUpdate }: ContactsManagerProps) => {
  const handleStatusUpdate = async (id: string, status: boolean) => {
    try {
      await contactsAPI.updateStatus(id, status);
      toast.success(`Contact marked as ${status ? "completed" : "pending"}`);
      onUpdate();
    } catch (error) {
      toast.error("Failed to update contact status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      await contactsAPI.delete(id);
      toast.success("Contact deleted successfully");
      onUpdate();
    } catch (error) {
      toast.error("Failed to delete contact");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contacts Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>Rs.{contact.budget}</TableCell>
                <TableCell>
                  <Badge variant={contact.status ? "default" : "secondary"}>
                    {contact.status ? "Completed" : "Pending"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusUpdate(contact._id!, !contact.status)}
                    >
                      {contact.status ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(contact._id!)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContactsManager;
