/**
 * Form field component with icon
 */
const FormField = ({ field }) => {
  return (
    <div>
      <label 
        htmlFor={field.id} 
        className="text-[rgb(1,95,116)] font-medium min-[500px]:text-sm"
      >
        {field.label}
      </label>
      <div className="flex mt-1">
        <span className="bg-white px-3 py-2 border border-r-0 border-gray-300 rounded-l-md flex items-center">
          <field.icon size={16} className="text-gray-600" />
        </span>
        <input 
          type={field.type} 
          id={field.id} 
          className="w-full p-2 text-sm border border-gray-300 rounded-r-md focus:outline-none focus:border-[rgb(1,95,116)]" 
          placeholder={field.placeholder}
          required
        />
      </div>
    </div>
  );
};

export default FormField;
