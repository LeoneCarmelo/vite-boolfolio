<script>
import { store } from '../store';
//import NaviGate from '../components/NaviGate.vue';

export default {
    name: "HomePage",
    components: {
        //NaviGate,

    },
    data() {
        return {
            store,
            my_name: 'Carmelo Leone',
            updateRotationLogo: '',
        };
    },
    methods: {
        updateRotation(event, element) {
            const angle = this.calculateRotationAngle(event, element);
            element.style.transform = `rotate(${angle}deg)`;
        },
        calculateRotationAngle(event, element) {
            //Get coordinates based on the position on the logo
            const boundingBox = element.getBoundingClientRect();
            /* get the logo's center 
            boundingBox.left = form the viewport to the left border of the logo
            boundingBox.width = the width of the logo / 2 */
            const centerX = boundingBox.left + boundingBox.width / 2;
            //same thing for Y
            const centerY = boundingBox.top + boundingBox.height / 2;

            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;

            // Calculate the angle in radians
            const angle = Math.atan2(deltaY, deltaX);

            // Convert radians to degrees
            const angleDegrees = angle * (180 / Math.PI);

            return angleDegrees;
        },
        activateRotation() {
            const logo = document.querySelector('img[src="logo.png"]');
            if (logo && !this.updateRotationLogo) {
                this.updateRotationLogo = (event) => {
                    this.updateRotation(event, logo);
                };

                document.addEventListener('mousemove', this.updateRotationLogo);
            }
        },
        deactivateRotation() {
            if (this.updateRotationLogo) {
                document.removeEventListener('mousemove', this.updateRotationLogo);
                this.updateRotationLogo = null;
            }
        },
    },
    mounted() {
        this.activateRotation();
    },
    beforeUpdate() {
        this.deactivateRotation();
    },
    updated() {
        this.activateRotation();
    },
    beforeDestroy() {
        this.deactivateRotation();
    },

}
</script>

<template>
    <div class="cont">
        <!--    <NaviGate /> -->
        <div class="container-name overflow_y_hide">
            <div class="row justify-content-center w-100">
                <div class="col text-center">
                    <router-link to="/about" class="text-decoration-none">
                        <!--  <h1> --><!-- I'm <br> -->
                        <!-- <span id="ml3">{{ my_name }}</span> -->
                        <!-- br>Full Stack Developer based in the Netherlands. -->
                        <!-- </h1> -->
                        <img key="logo" width="100" src="logo.png" alt="" class="animate__animated animate__zoomIn"
                            loading="lazy">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.cont {
    height: 100vh;
    width: 100%;
    position: relative;
}

.container-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;

    a>h1 {
        animation-name: slidein 1.5s;
        color: $first-3;

        span {
            font-family: 'Comforter', cursive;
            color: $first-3;
            animation: change-color 5s ease 3s forwards;
        }

        @keyframes change-color {
            0% {
                color: $first-3;
            }

            50% {
                color: $first-3;
            }

            100% {
                color: $second-10;
            }
        }
    }

    a {
        display: inline-block;
        box-shadow: 0;
        transition: box-shadow 0.35s ease;

        &:hover {
            box-shadow: 0 0 3px $second-3 !important;
        }

        &:focus {
            box-shadow: 0 0 3px $first-3 !important;
        }
    }

}



#ml3 {
    font-weight: 900;
    font-size: 5rem;
}

@media screen and (min-width:768px) {
    #ml3 {
        font-size: 7rem;
    }
}


@keyframes slidein {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>