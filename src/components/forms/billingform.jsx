import { Label, TextInput } from 'flowbite-react';

export default function Billingform() {
  return (
    <form className="bg-white rounded-lg px-2 w-full">
      <div className="mb-4">
        <Label htmlFor="srNo" value="Serial Number" />
        <TextInput
          id="srNo"
          placeholder="Enter serial number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="date" value="Date" />
        <TextInput
          id="date"
          placeholder="Enter date"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="partyName" value="Party Name" />
        <TextInput
          id="partyName"
          placeholder="Enter party name"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="goods" value="Goods" />
        <TextInput
          id="goods"
          placeholder="Enter goods description"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="billNo" value="Bill Number" />
        <TextInput
          id="billNo"
          placeholder="Enter bill number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="qty" value="Quantity" />
        <TextInput
          id="qty"
          placeholder="Enter quantity"
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="unit" value="Unit" />
        <TextInput
          id="unit"
          placeholder="Enter unit"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="price" value="Price" />
        <TextInput
          id="price"
          placeholder="Enter price"
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="csgt" value="CGST" />
        <TextInput
          id="csgt"
          placeholder="Enter CGST"
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="sgst" value="SGST" />
        <TextInput
          id="sgst"
          placeholder="Enter SGST"
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="igst" value="IGST" />
        <TextInput
          id="igst"
          placeholder="Enter IGST"
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="roundOff" value="Round Off" />
        <TextInput
          id="roundOff"
          placeholder="Enter round off"
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="grandTotal" value="Grand Total" />
        <TextInput
          id="grandTotal"
          placeholder="Enter grand total"
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="fileUpload"/>
        <input
          type="file"
          id="fileUpload"
          name="fileUpload"
          accept=".pdf, .doc, .docx"
          className="border rounded-lg px-3 py-2"
          required
        />
      </div>
    </form>
  );
}
