import React, { useState } from "react";
import { Label, TextInput, Button, Select } from "flowbite-react";

export default function Kantaform() {
  const [isSampleTaken, setIsSampleTaken] = useState(false);
  const [isCrossVerification, setIsCrossVerification] = useState(false);
  const [category, setCategory] = useState("");
  const [showLabForm, setShowLabForm] = useState(false);

  const handleNextClick = () => {
    if (isCrossVerification) {
      setShowLabForm(true);
    }
  };

  const handleCrossVerificationToggle = () => {
    setIsCrossVerification(!isCrossVerification);
    setShowLabForm(false); // Hide the lab form when toggling off
  };

  return (
    <form className="bg-white rounded-lg px-2 w-full">
      {/* ... (your other form fields) */}

      {/* Entry Time */}
      <div className="mb-4">
        <Label htmlFor="entryTime" value="Entry Time" />
        <TextInput id="entryTime" placeholder="Enter entry time" required />
      </div>

      {/* Exit Time */}
      <div className="mb-4">
        <Label htmlFor="exitTime" value="Exit Time" />
        <TextInput id="exitTime" placeholder="Enter exit time" required />
      </div>

      {/* Entry Time Weight */}
      <div className="mb-4">
        <Label htmlFor="entryTimeWeight" value="Entry Time Weight" />
        <TextInput
          id="entryTimeWeight"
          placeholder="Enter entry time weight"
          type="number"
          required
        />
      </div>

      {/* Exit Time Weight */}
      <div className="mb-4">
        <Label htmlFor="exitTimeWeight" value="Exit Time Weight" />
        <TextInput
          id="exitTimeWeight"
          placeholder="Enter exit time weight"
          type="number"
          required
        />
      </div>

      {/* Is Sample Taken */}
      <div className="mb-4 flex flex-col">
        <Label value="Is Sample Taken" />
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isSampleTaken}
            onChange={() => setIsSampleTaken(!isSampleTaken)}
          />
          <div
            className={`w-11 h-6 ${
              isSampleTaken ? "bg-blue-600" : "bg-gray-200"
            } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          YES/NO          
          </span>
        </label>
      </div>

      {/* Sample Details */}
      {isSampleTaken && (
        <React.Fragment>
          <div className="mb-4">
            <Label htmlFor="source" value="Source" />
            <TextInput id="source" placeholder="Enter source" required />
          </div>
          <div className="mb-4">
            <Label value="Category" />
            <Select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">Select category</option>
              <option value="6-75mm">6-75mm lumps</option>
              <option value="0-25mm">0-25mm chips</option>
              <option value="0-3mm">0-3mm dust</option>
              <option value="3-10mm-high">3-10mm high</option>
              <option value="3-10mm-low">3-10mm low</option>
              <option value="10-15mm">10-15mm chips ready to use</option>
            </Select>
          </div>
          <div className="mb-4">
            <Label htmlFor="remarks" value="Remarks" />
            <TextInput id="remarks" placeholder="Enter remarks" required />
          </div>
        </React.Fragment>
      )}

      {/* Status */}
      <div className="mb-4">
        <Label value="Status" />
        <Select>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </Select>
      </div>

      {/* % Purity */}
      <div className="mb-4">
        <Label htmlFor="purity" value="% Purity" />
        <TextInput id="purity" placeholder="Enter % purity" required />
      </div>

      {/* Cross Verification */}
      <div className="mb-4 flex flex-col">
        <Label value="Cross Verification Required" />
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isCrossVerification}
            onChange={handleCrossVerificationToggle}
          />
          <div
            className={`w-11 h-6 ${
              isCrossVerification ? "bg-blue-600" : "bg-gray-200"
            } peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
          ></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            YES/NO
          </span>
        </label>
      </div>

      {/* Next or Submit Button */}
      <div className="mb-4">
        {isCrossVerification ? (
          <Button onClick={handleNextClick} className="w-full">Next</Button>
        ) : (
          <Button type="submit" className="w-full">
            Submit
          </Button>
        )}
      </div>
      {showLabForm && (
        <div className="bg-white rounded-lg px-2 w-full">
          <div className="mb-4">
            <Label htmlFor="labName" value="Lab Name" />
            <TextInput id="labName" placeholder="Enter lab name" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="labAddress" value="Lab Address" />
            <TextInput id="labAddress" placeholder="Enter lab address" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="report" value="Report" />
            <TextInput id="report" placeholder="Enter report" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="dispatchDate" value="Dispatch Date" />
            <TextInput id="dispatchDate" placeholder="Enter dispatch date" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="receiptDate" value="Receipt Date" />
            <TextInput id="receiptDate" placeholder="Enter receipt date" required />
          </div>
          <Button type="submit" className="w-full">
            Submit 
          </Button>
        </div>
      )}
    </form>
  );
}
