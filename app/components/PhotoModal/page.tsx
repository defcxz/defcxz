import { Drawer } from 'vaul'

export default function Page(props: any, photo: any) {
  console.log(photo)
  return (
    <Drawer.Root open={true} onClose={props.closeModal}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40"/>
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
