import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
        We are here to assist you with any inquiries.Please reach out to us
        using the contact information below.
      </p>

      <section className="mb-10 max-w-2xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
          Get in Touch
        </h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium w-1/3">Location</TableCell>
              <TableCell>Likusterikatu 1, 02250 Espoo, Finland</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Phone (Local)</TableCell>
              <TableCell>0468021566</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Phone (International)
              </TableCell>
              <TableCell>+358 46 802 1566</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Email (Sales/General)
              </TableCell>
              <TableCell>soniparasauto@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Email (Export/Logistics)
              </TableCell>
              <TableCell>soniparasauto@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Business Hours</TableCell>
              <TableCell>
                Mon-Fri: 8:00 - 17:00 (Actively respond to WhatsApp messages
                outside office hours)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
