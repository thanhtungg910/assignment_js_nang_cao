import AWN from "awesome-notifications";
import "awesome-notifications/dist/style.css";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { deleteUser, getUsers } from "../../api/users";
import reRender from "../../utils/rerender";

const AuthorTr = {
    async  render() {
        const { data } = await getUsers();
        return /* html */ data.map((item) => `<tr class="text-gray-700 dark:text-gray-400">
        <td class="px-4 py-3">
           <div class="flex items-center text-sm">
              <!-- Avatar with inset shadow -->
              <div class="relative hidden w-12 h-12 mr-3 rounded-full md:block">
                 <img class="object-cover w-full h-full rounded-full"
                    src="${item.avatar}"
                    alt="" loading="lazy" />
                 <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true">
                 </div>
              </div>
              <div>
                 <p class="font-semibold">${item?.username}</p>
              </div>
           </div>
        </td>
        <td class="px-4 py-3 text-sm">
        ${item?.email}
        </td>
        <td class="px-4 py-3 text-sm">
        ${item?.phone}
        </td>
        <td class="px-4 py-3 text-xs">
           <span
              class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
              Active
           </span>
        </td>
        
     </tr>`).join("");
    },
    afterRender() {
        const btnDelete = document.querySelectorAll(".delete-user");
        btnDelete.forEach((btn) => {
            btn.addEventListener("click", async () => {
                const { id } = btn.dataset;
                try {
                    const notifier = new AWN();
                    const onOk = () => {
                        deleteUser(id).then(() => {
                            reRender("#user-list", AuthorTr);
                            toastr.success("Xóa thành công");
                        });
                    };
                    const onCancel = () => "";
                    notifier.confirm(
                        " ",
                        onOk,
                        onCancel,
                        {
                            labels: {
                                confirm: "Bạn có muốn xóa không?",
                            },
                        },
                    );
                } catch (error) {
                    toastr.error(error.data.response);
                }
            });
        });
    },
};
export default AuthorTr;