import { MessageSquare } from 'lucide-react';

/**
 * Message textarea component
 */
const FormMessage = () => {
  return (
    <div>
      <label 
        htmlFor="msg" 
        className="text-[rgb(1,95,116)] font-medium min-[500px]:text-sm"
      >
        Message
      </label>
      <div className="flex mt-1">
        <span className="bg-white px-3 py-2 border border-r-0 border-gray-300 rounded-l-md flex items-start pt-3">
          <MessageSquare size={16} className="text-gray-600" />
        </span>
        <textarea 
          id="msg" 
          rows="3" 
          className="w-full p-2 text-sm border border-gray-300 rounded-r-md focus:outline-none focus:border-[rgb(1,95,116)]" 
          placeholder="Write your message"
          required
        ></textarea>
      </div>
    </div>
  );
};

export default FormMessage;
