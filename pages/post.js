//import Layout from "../components/Layout";
//import { useRouter } from "next/router";
//import { posts } from "../profile";

// const Post = () => {
//   const router = useRouter();

//   const currentPost = posts.filter(
//     (post) => post.title === router.query.title
//   )[0];

//   return (
//     <Layout title={router.query.title} footer={false}>
//       <div className="text-center">
//         <img
//           src={currentPost.imageURL}
//           alt=""
//           style={{ width: "50%" }}
//           className="img-fluid"
//         />
//         <p className="p-4"><strong>{currentPost.content}</strong></p>
//       </div>
//     </Layout>
//   );
// };

// export default Post;

import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {
  const router = useRouter();

  const currentPost = posts.find(
    (post) => post.title === router.query.title
  );

  // Verifica si currentPost existe antes de renderizar
  if (!currentPost) {
    // Puedes renderizar un mensaje de error o redirigir al usuario
    return <div>Post no encontrado</div>;
  }

  return (
    <Layout title={router.query.title} footer={false}>
      <div className="text-center">
        <img
          src={currentPost.imageURL}
          alt=""
          style={{ width: "50%" }}
          className="img-fluid"
        />
        <p className="p-4"><strong>{currentPost.content}</strong></p>
      </div>
    </Layout>
  );
};

export default Post;
