import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const showDeleteConfirmAlert =  (handleDelete) => {
    Swal.fire({
        title: 'Do you want to delete this item?',
        showCancelButton: true,
        confirmButtonText: `Delete`,
      }).then( async (result) => {
        if (result.isConfirmed) {
            try{
            await handleDelete()
            Swal.fire('Item deleted!', '', 'success')
            }catch(err){
            Swal.fire('Something went wrong', '', 'error')
            }
          
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
};
