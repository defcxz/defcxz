'use client'

import { Drawer } from 'vaul'

export default function PhotoGraphyDrawer({isDrawerOpen, setIsDrawerOpen, photoInfo}) {
  console.log(photoInfo)
  return(
    <Drawer.Root shouldScaleBackground open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-900 flex flex-col rounded-t-[10px] h-[80%] mt-56 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-gray-950 rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                { photoInfo.titulo }
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                {photoInfo.descripcion}
              </p>
              <p className="text-zinc-600 mb-8">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&apos;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
