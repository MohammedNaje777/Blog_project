import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm, usePage } from "@inertiajs/react";

export default function Create(){
   const{data, setData, post, processing, errors}=useForm();

   function submit(e){
    e.preventDefault();
    post('/blogs');
   }
   return(
    <Card className="max-w-md mx-auto mt-10 rounded-2xl border border-gray-200 bg-white shadow-md">
          <CardHeader className="p-6 border-b border-gray-100">
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Create blog
            </CardTitle>
            <CardDescription className="text-sm text-gray-500 mt-1">
              create your blog
            </CardDescription>
          </CardHeader>
    
          <CardContent className="p-6 space-y-4">
            <form onSubmit={submit} className="space-y-4">
            
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  value={data.title}
                  onChange={e => setData('title', e.target.value)}
                />
                {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  value={data.body}
                  onChange={e => setData('body', e.target.value)}
                />
                {errors.body && <p className="text-sm text-red-600 mt-1">{errors.body}</p>}
              </div>
    
              {/* Submit */}
              <button
                type="submit"
                disabled={processing}
                className={`w-full text-sm font-medium py-2 rounded-md transition ${
                  processing
                    ? 'bg-blue-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {processing ? 'Creating post...' : 'Create'}
              </button>
            </form>
          </CardContent>
    
          <CardFooter className="p-4 bg-gray-50 border-t border-gray-100 text-sm text-center text-gray-600">
          
          </CardFooter>
        </Card>
   )
}