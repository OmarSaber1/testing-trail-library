// to solve problem import react from react + problem with jest files cant read jsx =>> tsconfig.jest.json =>>

{
"extends": "./tsconfig.json",
"compilerOptions": {
"jsx": "react-jsx"
}
}

then add to jest.config.js

// we updated jest.config.js too
