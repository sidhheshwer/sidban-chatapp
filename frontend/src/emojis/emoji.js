export const emojs=[
    "😄", "🎉", "🐶", "🍕", "🎈", 
    "🚀", "🎨", "🌈", "😎", "🎶", 
    "🍦", "🎮", "🍩", "🦄", "🏖️", 
    "🥳", "✨", "🤖", "🌟", "🐱"
]

export  const getRandomEmojis=()=>{
    return emojs[Math.floor(Math.random()*emojs.length)]
};