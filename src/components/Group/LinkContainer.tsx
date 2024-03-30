import { Eye,Lock } from 'lucide-react';
import Discussion from '@/app/GroupLinks/Discussion/page';
function Link(){
return(
    <section className="flex">
        {/* left div */}
        <div className="w-full h-72 border border-gray-50">
         <Discussion/>
        </div>
        {/* right div */}
        <div className="w-full h-72 border border-gray-50 pl-5">
        <h2 className='text-lg mt-4 mb-4 text-gray-800'>About</h2>
        <div className='flex space-x-3 mb-2'>
        <Lock className='text-green-500 mt-1'/>
        <h3 className='text-lg'>Private</h3>
        </div>
         <div className='ml-9 mb-2'>
            <p className='text-gray-400'>Only members can see who's in the group and what they post.</p>
         </div>
        <div className='flex space-x-3  mb-2'>
            <Eye className='text-blue-500 mt-1'/>
            <h3 className='text-lg'>Visible</h3>
        </div>
        <div className='ml-9 mb-2'>
            <p className='text-gray-400'>Anyone can find this page</p>
        </div>
        <div className='ml-9 mt-8'>
        <button
                onClick={() => handlePost(true)}
                className="bg-gradient-to-r  from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-44 py-2 rounded transition duration-200"
              >
               Learn more
              </button>
        </div>
        </div>
    </section>
);

}
export default Link;