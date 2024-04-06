import React from 'react';

const Home = () => {
  return (
    <>
      <div className="container1">
        <div className="col5">
          <img src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?w=740&t=st=1706776955~exp=1706777555~hmac=553afccb6567663926b6734dd68eaa1cc6ca8315c51db4e0ebb4f8684f6fabd3" alt="image" />
      
        </div>
        <div className="col5">
          <div className="col-desc">
            <span>Fresh and organic</span>
            <h3>your daily need products</h3>
            <a href="#" className="btn">know more</a>
          </div>
        </div>
      </div>

      <div className="services">
        <h1>Our Services</h1>
        <hr />
        <div className="service-container">
          <div className="services-col">
            <div className="image">
              <img
                src="https://as2.ftcdn.net/v2/jpg/05/17/52/29/1000_F_517522981_yqwyRJWZMj1NKsInPDwkdsOA7oG4rcqB.jpg"
                alt=""
              />
            </div>
            <div className="img-desc">
              <h3>Fruits & Vegetables</h3>
              <a href="#" className="btn">order now</a>
            </div>
          </div>
          <div className="services-col">
            <div className="image">
              <img
                src="https://img.freepik.com/premium-vector/delivery-man-riding-red-scooter-illustration_9845-14.jpg?w=740"
                alt=""
              />
            </div>
            <div className="img-desc">
              <h3>Delivery in just 30 Min</h3>
              <a href="#" className="btn">order now</a>
            </div>
          </div>
          <div className="services-col">
            <div className="image">
              <img
                src="https://as2.ftcdn.net/v2/jpg/05/47/69/61/1000_F_547696174_nVdIXqW7LBS1oXSGO7b2yYgrH5ErmWkF.jpg"
                alt=""
              />
            </div>
            <div className="img-desc">
              <h3>Easy Pickup and Order</h3>
              <a href="#" className="btn">order now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="offer_home">
        <h1>Latest Offer</h1>
        <p>50% off in your first order</p>
        <a href="#" className="btn">check now</a>
      </div>

      <div className="product-category">
        <h1>Category</h1>
        <hr />
        <div className="product">
          <div className="product-col">
            <img
              src="https://img.freepik.com/premium-photo/fruits-vegetables-wicker-basket-white-background_420001-7712.jpg"
              alt=""
            />
            <div className="content">
              <h2>Vegetables</h2>
            </div>
          </div>
          <div className="product-col">
            <img
              src="https://img.freepik.com/free-photo/fresh-fruits-isolated-white-background_144627-10547.jpg?w=740&t=st=1683520237~exp=1683520837~hmac=a662f9849c56954fd87e38b9aff5d88572d533ce1855af09b08c3809a74c9584"
              alt=""
            />
            <div className="content">
              <h2>fruits</h2>
            </div>
          </div>
          <div className="product-col">
            <img
              src="https://img.freepik.com/premium-photo/raw-chicken-meat-white-background_58830-691.jpg?w=740"
              alt=""
            />
            <div className="content">
              <h2>meats</h2>
            </div>
          </div>
          <div className="product-col">
            <img
              src="https://as2.ftcdn.net/v2/jpg/00/84/27/13/1000_F_84271344_UWOT5DunfMbMn9CFfFEFtZdLywh24r1P.jpg"
              alt=""
            />
            <div className="content">
              <h2>milks product</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

