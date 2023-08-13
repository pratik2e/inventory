import { Label, TextInput } from 'flowbite-react';

export default function InventoryForm() {
  return (
      <form className="bg-white rounded-lg px-2  w-full">
        <div className="mb-4">
          <Label htmlFor="itemName" value="Item Name" />
          <TextInput
            id="itemName"
            placeholder="Enter item name"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="partNo" value="Part No." />
          <TextInput
            id="partNo"
            placeholder="Enter part number"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="rackNo" value="Rack No." />
          <TextInput
            id="rackNo"
            placeholder="Enter rack number"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="qty" value="QTY" />
          <TextInput
            id="qty"
            placeholder="Enter quantity"
            type="number"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="issueQty" value="Issue QTY" />
          <TextInput
            id="issueQty"
            placeholder="Enter issued quantity"
            type="number"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="netQty" value="Net QTY" />
          <TextInput
            id="netQty"
            placeholder="Enter net quantity"
            type="number"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="remark" value="Remark" />
          <TextInput
            id="remark"
            placeholder="Enter remarks"
            required
          />
        </div>
        {/* <Button type="submit" className="w-full">
          Submit
        </Button> */}
      </form>

  );
}
