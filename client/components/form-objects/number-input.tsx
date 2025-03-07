import { useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const NumberInput = ({
	id,
	label,
	placeholder,
	value = 0,
	on_change
}: {
	id: string;
	label: string;
	placeholder: string;
	value?: number;
	on_change?: any
}) => {


	return (
		<div className={`flex flex-col w-40 md:w-40 gap-1.5`}>
			<Label htmlFor={id}>{label}</Label>
			<div className='flex flex-row gap-1'>
				<Button type='button' onClick={() => { on_change((value as number) - 1)}}>
					-
				</Button>
				<Input type='number' id={id} placeholder={placeholder} value={value} onChange={on_change} />
				<Button type='button' onClick={() => on_change((value as number) + 1)}>
					+
				</Button>
			</div>
		</div>
	);
};

export default NumberInput;
