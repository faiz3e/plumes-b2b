import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    useLocation,
    useParams,
    useNavigate
} from "react-router-dom";
import { OurProducts } from "./OurProducts";
import { products } from "../products";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const SingleProduct = (props) => {
    const navigate = useNavigate()
    const [prod, setProd] = useState(null)
    const [updateQuantity, setUpdateQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Medium');
    const { sku } = useParams();

    const findProductBySku = () => {
        for (const category of Object.values(products)) {
            for (const product of Object.values(category)) {
                if (product.sku === sku) {
                    return product;
                }
            }
        }
        return null;
    };
    useEffect(() => {
        const data = findProductBySku() || {};
        setProd(data);
    }, [])

    // const selectedValue = [].filter((item) => item.id === sku)

    const updateSelectedValue = (counter) => {
        if ((updateQuantity === 1 && counter === -1) || (updateQuantity === 5 && counter === +1)) {
            setUpdateQuantity(updateQuantity)
        }
        else {
            setUpdateQuantity(updateQuantity + counter)
        }
    }
    const makeProduct = () => {
        const product = {
            selectedSize: selectedSize,
            id: sku,
            updateQuantity: updateQuantity,
            // media_url: selectedValue[0].media_url,
            // permalink: selectedValue[0].permalink,
            // price: selectedValue[0]?.price || 120 + (Math.ceil(Math.random() * 100)),
        }
        navigate('/cart')
    }
    console.log("prod", prod);

    return (
        <div>
            <section className="ftco-section bg-light">
                {prod && <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
                            <a className="img-prod">
                                {/* <img className="img-fluid" src={selectedValue[0]?.media_url} alt="Colorlib Template" /> */}
                                <img className="img-fluid" src={prod?.images[0]} alt="Colorlib Template" />
                            </a>
                        </div>
                        <div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
                            <h3>{prod?.name}</h3>
                            <p className="price"><span>{prod?.price + ' AED/-'}</span></p>
                            {prod?.name && <p>{prod.description}</p>}
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="form-group d-flex">
                                        <div className="select-wrap">
                                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                            <select name="" id="" className="form-control" value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
                                                {prod?.availableSizes?.map((objItem) => {
                                                    return <option value="Small">{objItem}</option>
                                                })}
                                                {/* <option value="Medium">Medium</option>
                                                <option value="Large">Large</option>
                                                <option value="Extra Large">Extra Large</option> */}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <span className="input-group-btn mr-2">
                                        <button onClick={() => updateSelectedValue(-1)} type="button" className="quantity-left-minus btn" data-type="minus" data-field="">
                                            <i className="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" className="form-control input-number" value={updateQuantity} min="1" max="100" />
                                    <span className="input-group-btn ml-2">
                                        <button onClick={() => updateSelectedValue(+1)} type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
                                            <i className="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <p><div onClick={makeProduct} className="btn btn-primary py-3 px-5 mb-5">Add to Cart</div></p>

                            <h2 className="mb-3">Product description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                            <p>
                                <img src="images/image_1.jpg" alt="" className="img-fluid" />
                            </p>
                            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                            <div className="tag-widget post-tag-container mb-5 mt-5">
                                <div className="tagcloud">
                                    <a href="#" className="tag-cloud-link">Life</a>
                                    <a href="#" className="tag-cloud-link">Sport</a>
                                    <a href="#" className="tag-cloud-link">Tech</a>
                                    <a href="#" className="tag-cloud-link">Travel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </section>
            <section className="ftco-section bg-light pt-0">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-12 ftco-animate fadeInUp ftco-animated">
                                <h2 className="mb-3">8 Tips For Shopping</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                                <p>
                                    <img src="images/image_1.jpg" alt="" className="img-fluid" />
                                </p>
                                <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                                <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                                <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                                <p>
                                    <img src="images/image_2.jpg" alt="" className="img-fluid" />
                                </p>
                                <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                                <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                                <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                                <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
                                <div className="tag-widget post-tag-container mb-5 mt-5">
                                    <div className="tagcloud">
                                        <a href="#" className="tag-cloud-link">Life</a>
                                        <a href="#" className="tag-cloud-link">Sport</a>
                                        <a href="#" className="tag-cloud-link">Tech</a>
                                        <a href="#" className="tag-cloud-link">Travel</a>
                                    </div>
                                </div>

                                <div className="about-author d-flex p-4 bg-light">
                                    <div className="bio align-self-md-center mr-4">
                                        <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
                                    </div>
                                    <div className="desc align-self-md-center">
                                        <h3>Lance Smith</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                    </div>
                                </div>


                                <div className="pt-5 mt-5">
                                    <h3 className="mb-5">6 Comments</h3>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>

                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="images/person_1.jpg" alt="Image placeholder" />
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>John Doe</h3>
                                                        <div className="meta">June 27, 2018 at 2:21pm</div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                        <p><a href="#" className="reply">Reply</a></p>
                                                    </div>


                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>John Doe</h3>
                                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                <p><a href="#" className="reply">Reply</a></p>
                                                            </div>

                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="vcard bio">
                                                                        <img src="images/person_1.jpg" alt="Image placeholder" />
                                                                    </div>
                                                                    <div className="comment-body">
                                                                        <h3>John Doe</h3>
                                                                        <div className="meta">June 27, 2018 at 2:21pm</div>
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                        <p><a href="#" className="reply">Reply</a></p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg" alt="Image placeholder" />
                                            </div>
                                            <div className="comment-body">
                                                <h3>John Doe</h3>
                                                <div className="meta">June 27, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                <p><a href="#" className="reply">Reply</a></p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="comment-form-wrap pt-5">
                                        <h3 className="mb-5">Leave a comment</h3>
                                        <form action="#" className="p-5 bg-light">
                                            <div className="form-group">
                                                <label htmlFor="name">Name *</label>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email *</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="website">Website</label>
                                                <input type="url" className="form-control" id="website" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="" id="message" cols={30} rows={10} className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


