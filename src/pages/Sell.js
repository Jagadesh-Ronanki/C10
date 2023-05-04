/* Out of Project Statement */
import { useEffect, useState } from 'react';

import FormField from '../components/FormField'
import CustomButton from '../components/CustomButton'

const Sell = ({ home, provider, account, escrow, togglePop }) => {
    const [form, setForm] = useState({
        name: '',
        address: '',
        description: '',
        image: '', 
        id: '',
        price: '',
        residence: '',
        bedrooms: '',
        bathrooms: '',
        area: '',
        yearbuilt: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting")
    }

    return(
      <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='max-w-screen-sm py-[40px]'>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-[#4b5264] sm:text-4xl mb-10">Property Details</h2>
          <div className="flex flex-col gap-[40px]">
            <FormField 
              labelName="Name the Property *"
              placeholder="Luxury NYC Penthouse"
              inputType="text"
              value={form.name}
              handleChange={(e) => handleFormFieldChange('name', e)}
            />
            <FormField 
              labelName="Address *"
              placeholder="St APT 49B, New York, NY 10019"
              inputType="text"
              value={form.address}
              handleChange={(e) => handleFormFieldChange('address', e)}
            />
            <FormField 
              labelName="Description *"
              placeholder="Luxury Penthouse located in the heart of NYC"
              inputType="text"
              value={form.description}
              handleChange={(e) => handleFormFieldChange('description', e)}
            />
            <FormField 
              labelName="Image *"
              placeholder="upload image"
              inputType="file"
              value={form.image}
              handleChange={(e) => handleFormFieldChange('image', e)}
            />
            <FormField 
              labelName="Purchase Price *"
              placeholder="20"
              inputType="text"
              value={form.price}
              handleChange={(e) => handleFormFieldChange('price', e)}
            />
            <FormField 
              labelName="Type of residence *"
              placeholder="20"
              inputType="combobox"
              value={form.residence}
              isSelect
              handleChange={(e) => handleFormFieldChange('residence', e)}
            />
          </div>
          <div className="max-w-screen-sm flex flex-wrap gap-[40px] mt-[40px]">
          <FormField 
              labelName="Bed Rooms *"
              placeholder="2"
              inputType="text"
              value={form.bedrooms}
              handleChange={(e) => handleFormFieldChange('bedrooms', e)}
            />
            <FormField 
              labelName="Bathrooms *"
              placeholder="3"
              inputType="text"
              value={form.bathrooms}
              handleChange={(e) => handleFormFieldChange('bathrooms', e)}
            />
            <FormField 
              labelName="Square Feet *"
              placeholder="2200"
              inputType="text"
              value={form.area}
              handleChange={(e) => handleFormFieldChange('area', e)}
            />
            <FormField 
              labelName="Year Built *"
              placeholder="2013"
              inputType="text"
              value={form.yearbuilt}
              handleChange={(e) => handleFormFieldChange('yearbuilt', e)}
            />
          </div>
          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Generate NFT"
              styles="bg-[#38BDF8]"
            />
          </div>
        </form>
      </div>
    );
}

export default Sell;