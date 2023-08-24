import { Alert, Button, Label, TextInput } from "flowbite-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebasec";
import { useState } from "react";


export default function Billingform() {
  const initialFormData = {
    billNo: '',
    date: '',
    partyName: '',
    goods: '',
    qty: '',
    unit: '',
    price: '',
    sgst: '',
    cgst: '',
    igst: '',
    roundOff: '',
    grandTotal: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);

  const isFormValid = () => {
    // Check if all fields are filled out
    return Object.values(formData).every((value) => value !== "");
  };


  const handlebill = async (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      return; // Don't submit if form is not valid
    }
    try {
      // Reference the "inventory" collection
      const billingCollectionRef = collection(db, "bills");

      // Add data to Firestore collection
      const docRef = await addDoc(billingCollectionRef, formData);
      console.log("Document written with ID:", docRef.id);

      // Reset form data
      setFormData(initialFormData);
      setShowAlert(true);

      // Hide the alert after a certain time (e.g., 3000 milliseconds)
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };
  return (
    <form className="bg-white rounded-lg px-2 w-full">
      <div className="mb-4">
        <Label htmlFor="date" value="Date" />
        <TextInput
          id="date"
          type="date"
          placeholder="Enter date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="partyName" value="Party Name" />
        <TextInput
          id="partyName"
          placeholder="Enter party name"
          value={formData.partyName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="goods" value="Goods" />
        <TextInput
          id="goods"
          placeholder="Enter goods description"
          value={formData.goods}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="billNo" value="Bill Number" />
        <TextInput
          id="billNo"
          placeholder="Enter bill number"
          value={formData.billNo}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="qty" value="Quantity" />
        <TextInput
          id="qty"
          placeholder="Enter quantity"
          value={formData.qty}
          onChange={handleInputChange}
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="unit" value="Unit" />
        <TextInput
          id="unit"
          placeholder="Enter unit"
          value={formData.unit}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="price" value="Price" />
        <TextInput
          id="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleInputChange}
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="cgst" value="CGST" />
        <TextInput
          id="cgst"
          placeholder="Enter CGST"
          value={formData.cgst}
          onChange={handleInputChange}
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="sgst" value="sgst" />
        <TextInput
          id="sgst"
          placeholder="Enter SGST"
          value={formData.sgst}
          onChange={handleInputChange}
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="igst" value="igst" />
        <TextInput
          id="igst"
          placeholder="Enter IGST"
          value={formData.igst}
          onChange={handleInputChange}
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="roundOff" value="roundOff" />
        <TextInput
          id="roundOff"
          placeholder="Enter round off"
          value={formData.roundOff}
          onChange={handleInputChange}
          type="number"
          required
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="grandTotal" value="grandTotal" />
        <TextInput
          id="grandTotal"
          placeholder="Enter grand total"
          value={formData.grandTotal}
          onChange={handleInputChange}
          type="number"
          required
        />
      </div>
      {/* 
      <div className="mb-4">
        <Label htmlFor="fileUpload" />
        <input
          type="file"
          id="fileUpload"
          name="fileUpload"
          accept=".pdf, .doc, .docx"
          className="border rounded-lg px-3 py-2"
        />
      </div>
      */}
      <Button className="w-full" onClick={handlebill}>Submit</Button>
      {showAlert && (
        <Alert color="info">
          <span>
            <p>
              <span className="font-medium">
              </span>
              added bill details
            </p>
          </span>
        </Alert>
      )}
    </form>
  );
}
