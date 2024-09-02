
import React from "react";

export const Testimony = (props) => {
	return (

		<section className="ftco-section testimony-section bg-light">
			<div className="container">
				<div className="row justify-content-center mb-3 pb-3">
					<div className="col-md-12 heading-section text-center ">
						<h1 className="big">Testimony</h1>
						<h2>What customer things about us.</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-8 ">
						<div className="row ">
							<div className="col-md-12">
								<div className="carousel-testimony owl-carousel d-flex ">

									<div className="item">
										<div className="testimony-wrap py-4 pb-5">
											<div className="user-img mb-4" style={{}}>
											</div>
											<div className="row justify-content-center pt-2">
												<div className="col-md-12 heading-section text-center">

													<span className="quote d-flex align-items-center justify-content-center">
														<i className="icon-quote-left"></i>
													</span>
													<p className="lead mb-1">{`“Our customers can wear our tees for years and they still maintain their original color and softness. They love the quality and durability.”`}</p>
													<span className="quote d-flex align-items-center justify-content-center">
														<i className="icon-quote-left"></i>
													</span>
												</div>
											</div>

										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
