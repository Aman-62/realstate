import styles from "@/styles/Form.module.css";
// import "../styles/globals.css";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Banner from "@/components/banner";

function FormProperty() {
  return (
    <>
      <Banner />
      {/* <section className={styles.banner}>
        <div className="container mx-auto">
          <div className="py-12">
            <h1 className="text-neutral-100 font-bold m-0 mb-2">
              Submit Property
            </h1>
            <p className="text-blue-300 m-0">
              Manage your profile and view property
            </p>
          </div>
        </div>
      </section> */}
      <section className={`container mx-auto`}>
        <form>
          <h2>Basic Information</h2>
          <div className={styles.formGroup} controlId="formBasicEmail">
            <label className={styles.formLabel}>Property Title</label>
            <input className={styles.formControl} type="text" />
          </div>

          <div>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Status</label>
                <select defaultValue="Choose...">
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Property Type</label>
                <select defaultValue="Choose...">
                  <option>Houses</option>
                  <option>Apartment</option>
                  <option>Villas</option>
                  <option>Commercial</option>
                  <option>Offices</option>
                  <option>Garage</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>Price</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>Area</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Bedrooms</label>
                <select defaultValue="Choose...">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Bathrooms</label>
                <select defaultValue="Choose...">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
            </div>
          </div>

          <h2 className="my-4">Gallery</h2>

          <div controlId="formFile" className={styles.formGroup}>
            <label className={styles.formLabel}>Upload Gallery</label>
            <input className={styles.formControl} type="file" />
          </div>

          <h2 className="my-4">Location</h2>

          <div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>Address</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>City</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>State</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>Zip Code</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
          </div>

          <h2 className="my-4">Detailed Information</h2>

          <div
            className={styles.formGroup}
            controlId="exampleinput className={styles.formControl}Textarea1"
          >
            <label className={styles.formLabel}>Description</label>
            <input className={styles.formControl} as="textarea" divs={3} />
          </div>

          <div>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Building Age (optional)
                </label>
                <select defaultValue="Choose...">
                  <option>0 - 5 years</option>
                  <option>0 - 10 years</option>
                  <option>0 - 15 years</option>
                  <option>0 - 20 years</option>
                  <option>20+ years</option>
                </select>
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Garage (optional)</label>
                <select defaultValue="Choose...">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Rooms (optional)</label>
                <select defaultValue="Choose...">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>

          <h2 className="my-4">Contact Information</h2>

          <div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>Name</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>Email</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
            <div>
              <div className={styles.formGroup} controlId="formBasicEmail">
                <label className={styles.formLabel}>Phone (optional)</label>
                <input className={styles.formControl} type="text" />
              </div>
            </div>
          </div>

          <button variant="primary" type="submit" className={styles.submitBtn}>
            Submit & Preview
          </button>
        </form>
      </section>
    </>
  );
}
export default FormProperty;
