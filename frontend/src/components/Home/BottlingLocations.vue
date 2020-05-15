<template>
    <div class="main">
        <hr class="featurette-divider top-spacer-md bottom-spacer">
        <div class="row">
        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading"><u>Where do we get our air?</u></h2>
                <p>
                    What’s top of mind when you think about glacier mountains and sprawling green forest? 
                    For most, it’s a striking view, an untouched landscape, and deep breaths of pure, 
                    natural air. That’s what we pictured when we started thinking about serving the best air 
                    to people around the world.
                </p>
                <p>
                    The Rocky Mountains of Canada are a protected UNESCO World Heritage Site. Here is 
                    where Rapid Air captures and bottles some the highest quality air in the world. We want 
                    our customers to experience breathing the way it was intended. Free of city pollution, 
                    fragrances and waste; our Banff and Lake Louise lines of clean air are unmatchable in 
                    quality.
                </p>
                <button type="button" class="btn btn-blue" data-toggle="modal" data-target="#BanffModal">
                    Banff Air
                </button>

                <div class="modal fade" id="BanffModal" tabindex="-1" role="dialog" aria-labelledby="BanffModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="BanffModalLable"><u>Banff Air</u></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>
                                    What’s top of mind when you think about glacier mountains and 
                                    sprawling green forest? For most, it’s a striking view, an 
                                    untouched landscape, and deep breaths of pure, natural air. 
                                    That’s what we pictured when we started thinking about serving 
                                    the best air to people around the world.
                                </p>
                                <p>
                                    We chose to bottle air from Banff because it's so memorable. 
                                    People who visit this place instantly are drawn into the purity of 
                                    the nature surrounding them. You breathe deeper and begin 
                                    feeling healthier. Banff is more than just incredible mountain air, 
                                    it's an emotional experience that we wanted to share with 
                                    everyone.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn light-bg" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>   

                <button type="button" class="btn btn-blue" data-toggle="modal" data-target="#LakeModal">
                    Lake Louise Air
                </button>

                <div class="modal fade" id="LakeModal" tabindex="-1" role="dialog" aria-labelledby="LakeModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="LakeModalLable"><u>Lake Louise Air</u></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>
                                   For nature lovers, Lake Louise is a favourite destination. A 
                                   picture perfect emerald lake is crowned by white-tipped 
                                   mountain ranges. The giant blue lake instantly pulls you in as it 
                                   contrasts with lush green trees and white tipped Rocky 
                                   Mountains. In the winter, it becomes a paradise of powdery 
                                   white snow.
                                </p>
                                <p>
                                    It’s here that the mighty Rocky Mountains are defined, and it’s 
                                    here that we bottle nature’s best air. The cool, humid 
                                    atmosphere makes you feel alive, and that’s what we want our 
                                    customers to feel.
                                </p>
                                <p>
                                    Lake Louise was a clear choice for us to bottle our Rocky 
                                    Mountain air from. It's clean and fresh, but it also makes you feel 
                                    on top of the world when you're surrounded by a crown of 
                                    mountain tops. We want our customers to breathe in a sense of 
                                    wonder along with a feeling of healthy air.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn light-bg" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="col-md-5">
            <img 
                src="@/assets/mountain.jpg" 
                alt="Image a moutain" 
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
                width="800" height="800">
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BottlingLocation',
}
</script>