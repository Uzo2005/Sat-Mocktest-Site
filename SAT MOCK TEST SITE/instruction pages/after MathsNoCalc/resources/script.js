//BUTTON ALERTS

function confirmAction() {
    var popup = confirm(" Are Sure You Want To Start The Timer?");
    if (popup == false){
      event.preventDefault();
    }
  }