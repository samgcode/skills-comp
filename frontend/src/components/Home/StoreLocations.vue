<template>
    <div class="main">
         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#LocationModal">
            {{ btnText }}
        </button>

        <div class="modal fade" id="LocationModal" tabindex="-1" role="dialog" aria-labelledby="LocationModalLable" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="LocationModalLable"><u>Locations</u></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="dropdown show botom-spacer-sm">
                            <select v-model="cityName" class="btn btn-secondary dropdown">
                                <option class="dropdown-item" href="#" >Calgary</option>
                                <option class="dropdown-item" href="#">Edmonton</option>
                                <option class="dropdown-item" href="#">Lethbridge</option>
                                <option class="dropdown-item" href="#">Fort McMurray</option>
                            </select>
                        </div>
                        <EmbedMap :mapSrc="mapURL" :key="mapRerenderKey"/>
                        <p>{{ cityInfo }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn light-bg" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import EmbedMap from './EmbedMap';

export default {
    name: 'StoreLocations',
    props: ['btnText'],
    components: {
        EmbedMap,
    },
    data() {
        return {
            cityName: 'Calgary',
            cityInfo: 'Our downtown Calgary store is located on the Bow River, steps away from restaurants, shops & the downtown core.',
            mapRerenderKey: 1,
        }
    },
    computed: {
        mapURL() {
            let url;
            switch(this.cityName) {
                case 'Calgary':
                    url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5015.965846637467!2d-114.08011082077597!3d51.05340311236208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe58f8970f3%3A0x5f0abb68c3235805!2sEau%20Claire%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1589333729787!5m2!1sen!2sca';
                    this.cityInfo = 'Our downtown Calgary store is located on the Bow River, steps away from restaurants, shops & the downtown core.';
                    break;
                case 'Edmonton':
                    url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.2169583723803!2d-113.50558638390928!3d53.53604026818619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0223931d91815%3A0x5763462a758605f9!2sOxbridge%20Place!5e0!3m2!1sen!2sca!4v1589334032549!5m2!1sen!2sca'
                    this.cityInfo = 'Located near the river valley, our store is steps from the parliament buildings & downtown core.';
                    break;
                case 'Lethbridge':
                    url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.641151279233!2d-112.8427663840058!3d49.69873014912254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e87cf3d264d53%3A0xc9acddfc9ab552fe!2sPark%20Place%20Mall!5e0!3m2!1sen!2sca!4v1589334559409!5m2!1sen!2sca'
                    this.cityInfo = 'Situated in the mall, we are only a minutes walk from downtown Lethbridge.';
                    break;
                case 'Fort McMurray':
                    url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189.053895448667!2d-111.37989358382433!3d56.72486512406799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53b008b47959f57d%3A0xa5bc64852c164c49!2sPeter%20Pond%20Mall!5e0!3m2!1sen!2sca!4v1589334612180!5m2!1sen!2sca'
                    this.cityInfo = 'Our Fort McMurray store is right downtown.';
                    break;
            }
            this.forceMapRender();
            return url;
        }
    },
    methods: {
        forceMapRender() {
            this.mapRerenderKey++;
        }
    }
}
</script>
