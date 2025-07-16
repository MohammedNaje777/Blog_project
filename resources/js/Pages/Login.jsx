import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm, usePage } from "@inertiajs/react";

export default function Login() {
  const { props } = usePage();
  const success = props.flash?.success;

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  function submit(e) {
    e.preventDefault();
    post('/login');
  }

  return (
    <Card className="max-w-md mx-auto mt-10 rounded-2xl border border-gray-200 bg-white shadow-md">
      <CardHeader className="p-6 border-b border-gray-100">
        <CardTitle className="text-2xl font-semibold text-gray-900">
          Login
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 mt-1">
          Login to your account
        </CardDescription>
      </CardHeader>

      {success && (
        <div className="bg-green-100 text-green-700 p-2 rounded mx-6 mt-4">
          {success}
        </div>
      )}

      <CardContent className="p-6 space-y-4">
        <form onSubmit={submit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your email"
              value={data.email}
              onChange={e => setData('email', e.target.value)}
            />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your password"
              value={data.password}
              onChange={e => setData('password', e.target.value)}
            />
            {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
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
            {processing ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </CardContent>

      <CardFooter className="p-4 bg-gray-50 border-t border-gray-100 text-sm text-center text-gray-600">
        Don't have an account?{' '}
        <a href="/signup" className="text-blue-600 hover:underline ml-1">Signup</a>
      </CardFooter>
    </Card>
  );
}
