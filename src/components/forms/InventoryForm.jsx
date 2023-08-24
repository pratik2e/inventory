import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { collection, addDoc } from "firebase/firestore";
import  {db}  from "../../firebasec";
import { useState } from 'react';


export default function InventoryForm() {
  const initialFormData = {
    itemName: '',
    partNo: '',
    rackNo: '',
    qty: '',
    issueQty: '',
    netQty: '',
    remark: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);

  const isFormValid = () => {
    // Check if all fields are filled out
    return Object.values(formData).every(value => value !== "");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      return; // Don't submit if form is not valid
    }

    try {
      // Reference the "inventory" collection
      const inventoryCollectionRef = collection(db, 'inventory');

      // Add data to Firestore collection
      const docRef = await addDoc(inventoryCollectionRef, formData);
      console.log('Document written with ID:', docRef.id);

      // Reset form data
      setFormData(initialFormData);
      setShowAlert(true);

      // Hide the alert after a certain time (e.g., 3000 milliseconds)
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error('Error adding document:', error);
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
      <form className="bg-white rounded-lg px-2  w-full">
        <div className="mb-4">
          <Label htmlFor="itemName" value="ItemName" />
          <TextInput
            id="itemName"
            placeholder="Enter item name"
            value={formData.itemName}
            onChange={handleInputChange}
            required
            
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="partNo" value="partNo." />
          <TextInput
            id="partNo"
            placeholder="Enter part number"
            value={formData.partNo}
            onChange={handleInputChange}
            required
            
          
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="rackNo" value="rackNo" />
          <TextInput
            id="rackNo"
            placeholder="Enter rack number"
            value={formData.rackNo}
            onChange={handleInputChange}
            required
            
          
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="qty" value="QTY" />
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
          <Label htmlFor="issueQty" value="issueQty" />
          <TextInput
            id="issueQty"
            placeholder="Enter issued quantity"
            value={formData.issueQty}
            onChange={handleInputChange}
            type="number"
            required
                      
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="netQty" value="netQty" />
          <TextInput
            id="netQty"
            placeholder="Enter net quantity"
            value={formData.netQty}
            onChange={handleInputChange}
            type="number"
            required
            
          
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="remark" value="remark" />
          <TextInput
            id="remark"
            placeholder="Enter remarks"
            value={formData.remark}
            onChange={handleInputChange}
            required
            
          
          />
        </div>
        <Button className="w-full"onClick={handleSubmit} disabled={!isFormValid()}>Submit</Button>
        {showAlert && (
        <Alert color="info">
          <span>
            <p>
              <span className="font-medium">
              </span>
              added details
            </p>
          </span>
        </Alert>
      )}
      </form>

  );
}
