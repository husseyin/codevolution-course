import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  //link üzerindeki id değerlerinde sadece istediklerimizi aldık
  const { productId, reviewId } = router.query;

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default Review;
