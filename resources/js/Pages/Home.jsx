import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function Home({ blogs }) {
  return (
    <div className="space-y-6 px-4 py-8 max-w-3xl mx-auto">
      {blogs.data.map((blog) => {
        // Convert date string to Date object
        const date = new Date(blog.created_at);

        return (
          <Card key={blog.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{blog.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {date.toLocaleDateString()} — by {blog.user?.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 line-clamp-3">{blog.body}</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link variant="link" href={`/blogs/${blog.id}`}>
                Read More →
              </Link>
            </CardFooter>
          </Card>
        );
      })}
       <div className="py-12 px-4">
          {blogs.links.map(link=>(
            link.url?
            <Link key={link.label} href={link.url} dangerouslySetInnerHTML={{__html: link.label}} className={`p-1 mx-1 ${link.active? "text-blue-500 font-bold no-underline" : ""}`} />
            :<span key={link.label} dangerouslySetInnerHTML={{__html: link.label}} className={'p-1 mx-1 text-slate-300'} />

          ))}
        </div>
    </div>
    
  );
}
