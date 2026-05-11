const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

Toast.fire({
  icon: 'error',
  title: 'Server 3 NC đang lỗi, vui lòng đổi Server!'
});