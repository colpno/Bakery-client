import { Button } from '~/components/index.ts';
import useAppStore from '~/stores/appStore.ts';

function ColorsPage() {
  const setTheme = useAppStore((state) => state.setTheme);

  return (
    <div className="space-y-8 ml-8 pt-24 my-8">
      <div className="flex gap-4">
        <Button onClick={() => setTheme('light')}>Light</Button>
        <Button onClick={() => setTheme('dark')} variant="outlined">
          Dark
        </Button>
        <Button onClick={() => setTheme('system')} variant="content">
          System
        </Button>
      </div>
      <div className="border-1 border-black dark:border-white inline-block">
        <div className="flex *:h-[300px]">
          {/* Block */}
          <div className="w-[300px] bg-primary-1 flex items-center justify-center flex-col gap-1">
            <div className="flex gap-2">
              <div className="rounded-full size-8 primary-1-2" />
              <div className="rounded-full size-8 bg-secondary-1" />
              <div className="rounded-full size-8 bg-secondary-2" />
            </div>
            <p className="text-primary-2">Hello world</p>
            <div className="grid grid-cols-2 gap-1">
              <button className="bg-accent-1 py-1 px-2 text-white">Button</button>
              <button className="bg-accent-2 py-1 px-2 text-white">Button</button>
            </div>
          </div>
          {/* Block */}
          <div className="w-[300px] primary-1-2 flex items-center justify-center flex-col gap-1">
            <div className="flex gap-2">
              <div className="rounded-full size-8 bg-primary-1" />
              <div className="rounded-full size-8 bg-secondary-1" />
              <div className="rounded-full size-8 bg-secondary-2" />
            </div>
            <p className="text-primary-1">Hello world</p>
            <p className="text-secondary-1">Hello world</p>
            <p className="text-secondary-2">Hello world</p>
            <div className="grid grid-cols-2 gap-1">
              <button className="bg-accent-1 py-1 px-2 text-white">Button</button>
              <button className="bg-accent-2 py-1 px-2 text-white">Button</button>
            </div>
          </div>
        </div>
        <div className="flex *:h-[300px]">
          {/* Block */}
          <div className="w-[300px] bg-secondary-1 flex items-center justify-center flex-col gap-1">
            <div className="flex gap-2">
              <div className="rounded-full size-8 bg-primary-1" />
              <div className="rounded-full size-8 primary-1-2" />
              <div className="rounded-full size-8 bg-secondary-2" />
            </div>
            <p className="text-primary-2">Hello world</p>
            <button className="bg-accent-1 py-1 px-2 text-white">Button</button>
          </div>
          {/* Block */}
          <div className="w-[300px] bg-secondary-2 flex items-center justify-center flex-col gap-1">
            <div className="flex gap-2">
              <div className="rounded-full size-8 bg-primary-1" />
              <div className="rounded-full size-8 primary-1-2" />
              <div className="rounded-full size-8 bg-secondary-1" />
            </div>
            <p className="text-primary-2">Hello world</p>
            <button className="bg-accent-1 py-1 px-2 text-white">Button</button>
          </div>
        </div>
      </div>
      <div className="*:h-[400px] inline-flex border-1 border-black dark:border-white">
        <div className="w-[300px] bg-primary-1 text-black grid place-content-center">
          <p>30%</p>
        </div>
        <div className="w-[300px] primary-1-2 text-white grid place-content-center">
          <p>30%</p>
        </div>
        <div className="w-[150px] bg-secondary-1 text-black grid place-content-center">
          <p>15%</p>
        </div>
        <div className="w-[150px] bg-secondary-2 text-black grid place-content-center">
          <p>15%</p>
        </div>
        <div className="w-[50px] bg-accent-1 text-white grid place-content-center">
          <p>5%</p>
        </div>
        <div className="w-[50px] bg-accent-2 text-white grid place-content-center">
          <p>5%</p>
        </div>
      </div>
    </div>
  );
}

export default ColorsPage;
