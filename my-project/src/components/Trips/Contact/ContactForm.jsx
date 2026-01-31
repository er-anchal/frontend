import FormField from './FormField';
import FormMessage from './FormMessage';
import { contactFields } from '../../../data';

/**
 * Contact form component with icon-prefixed inputs
 */
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <fieldset className="w-full lg:w-1/2 mx-auto bg-[#d4f5fb] p-7 rounded-xl">
      <legend className="text-center mb-6">
        <p className="text-xl font-bold text-[rgb(1,95,116)] m-0">
          Not sure what to do? We'll give you a Call back
        </p>
      </legend>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Input Fields */}
        {contactFields.map((field) => (
          <FormField key={field.id} field={field} />
        ))}

        {/* Message Textarea */}
        <FormMessage />

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-[#ffd400] hover:bg-[#f0c300] text-black font-bold py-2 rounded-full mt-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </fieldset>
  );
};

export default ContactForm;
