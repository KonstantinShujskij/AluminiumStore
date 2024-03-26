export const list = (state) => state.basket
export const products = (state) => state.basket.map((item) => item.id)
