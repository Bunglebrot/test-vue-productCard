'use strict';

Vue.component('product-card', {
  data() {
    return {
      showDescription: false,
      likeImage: '&#9825;',
    };
  },

  props: {
    card: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  template:
    `
      <article @mouseout="hideDescriptionCard()" @mouseover="showDescriptionCard()" class="product-card">
        <div class="product-card__details-wrapper">
          <span v-show="showDescription" class="producr-card__seller-name">
            {{ card.seller }}
          </span>
          <span class="product-card__country-flag">
            {{ card.flag }}
          </span>
        </div>
        <img class="product-card__product-image" 
          :src="card.image.source" 
          :alt="card.image.alt">
        <div class="product-card__hide-container"
          v-show="showDescription">
          <div class="product-card__similar-products similar-products">
            <ul class="similar-products__list"
              v-if="card.semiliarProducts.length">              

              <li class="similar-products__item"
                v-for="(item, index) in card.semiliarProducts"
                :key="index">

                <a class="similar-products__link"
                  :href="item.link">

                  <img class="similar-products__image"
                    :src="item.img" alt="">
                </a>
              </li>
            </ul>
          </div>
          <div class="product-card__product-description-wrapper product-description">

            <div class="product-description__btn-wrapper">
              <button class="product-description__vote-button product-description__vote-button_left star-button" type="button"> 	
                &#9733;
                <span class="star-button__rating">
                  {{ card.productRating }}
                </span>
              </button>
              <button class="product-description__vote-button product-description__vote-button_right heart-button" type="button"
                @click="setLike()"
                v-html="likeImage">
              </button>
            </div>           

            <h2 class="product-description__product-name">
              {{ card.productName }}
            </h2>

            <div class="product-description__other-info-wrapper">
              <span class="product-description__product-property"
                v-for="(item, index) in card.propertyProduct" :key="index">
                {{ item }}
              </span>
            </div>

            <div class="product-description__add-product">
              <div class="product-description__price-wrapper">
                <span class="product-description__price">
                  {{ card.price }}
                  <span v-html="card.currency"></span>
                </span>
              </div>
              <button type="button" class="product-description__button">В корзину</button>
            </div>
          </div>
        </div>

        <span v-show="!showDescription" class="product-description__price product-card__main-price">
          {{ card.price }}
          <span v-html="card.currency"></span>
        </span>
      </article>
    `,
    methods: {
      showDescriptionCard() {
        this.showDescription = true;
      },
      hideDescriptionCard() {
        this.showDescription = false;
      },
      setLike() {
        if (this.likeImage == '&#9825;') {
          this.likeImage = `&#9829;`;
        } else {
          this.likeImage = '&#9825;'
        }
      },
    },
});