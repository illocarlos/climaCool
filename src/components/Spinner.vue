<template>
 <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
</template>


<style  scoped>
.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 30%;
  border-radius: 2rem;
  background-color: #bbb7b7;
  opacity: 0.6;
  position: absolute;
  right: 0;
  bottom: 23%;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

 @media (min-width:750px) {
    .double-bounce1, .double-bounce2 {
         width: 35%;
        height: 30%;
       top:17% ;
       left: 50%;

    }

 }
</style>