import Swal from 'sweetalert2';

const toastr = {

    config: function(){
        return  Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });
    },

    success: function(e) {
        return this.config().fire({
            icon: 'success',
            html: `
            <div class="has-error">
                <p>${ e.type.title } </p>
                <span>${ e.type.message }</span>
            </div>`,
            background: '#3bb75e',
            width: '400px'
        });
    },

    error: function(e){
        return this.config().fire({
            icon: 'error',
            html: `
            <div class="has-error">
                <p>${ e.type.title } </p>
                <span>${ e.type.message }</span>
            </div>`,
            background: '#bd362f',
            width: '400px'
        });
    }
}

export default  toastr;
