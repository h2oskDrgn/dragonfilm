/* Optional notification helper.
   Kept under the original filename for backward compatibility. */

function showServerNotice(message, type = 'error') {
  if (window.Swal) {
    const toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    });
    toast.fire({ icon: type, title: message });
    return;
  }

  if (typeof showToast === 'function') {
    showToast(message, type);
    return;
  }

  console.warn(message);
}

window.showServerNotice = showServerNotice;
