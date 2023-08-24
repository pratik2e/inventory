import InventoryTable from "./components/InventoryTables";
import { Button,Modal } from "flowbite-react";
import {useState} from "react";
import InventoryForm from "../../components/forms/InventoryForm";

function InventoryPage() {
  const [openModal, setOpenModal] = useState();

  const openAddProductModal = () => {
    setOpenModal('addProduct');
  };

  const closeAddProductModal = () => {
    setOpenModal(undefined);
  };


    return (
    <div>
    <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full mb-1">
        <div className="mb-4">
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All products</h1>
        </div>
        <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
          <div className="flex items-center mb-4 sm:mb-0">
            <form className="sm:pr-3" action="#" method="GET">
              <label htmlFor="products-search" className="sr-only">Search</label>
              <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                <input
                  type="text"
                  name="email"
                  id="products-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search for products"
                />
              </div>
            </form>
          </div>
          <Button onClick={openAddProductModal}> ADD PRODUCT </Button>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
    <div className="overflow-auto">
        <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
                <InventoryTable></InventoryTable>
            </div>
        </div>
    </div>
</div>
<Modal
        dismissible
        show={openModal === 'addProduct'}
        onClose={closeAddProductModal}
        className="modal_class rounded-lg shadow-md "
        style={{ overlay: { background: 'rgba(0, 0, 0, 0.5)' } }}
      >
        <Modal.Header>Add Inventory</Modal.Header>
        <Modal.Body>

        <InventoryForm closeModal={closeAddProductModal} />
        
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
</div>
  );
}

export default InventoryPage