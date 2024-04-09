import { tags } from './_data/mock';
import Member from './_components/Member';
import Tag from './_components/Tag';
import useFetchData from '../../hooks/useFetchData';

export default function MembersPage() {
	const member = useFetchData('/members');

	return (
		<main>
			<div className="flex flex-col w-screen items-center bg-backgroundGrey p-20">
				<div className="flex flex-col items-center mx-auto mb-10">
					<h2 className="normal font-bold text-4xl text-textBlack">스터디 참여자</h2>
					<p className="mt-7 text-base font-light text-textLightBlack">
						HCCLab Study에 참여하고 있는 분들을 소개합니다.
					</p>
				</div>
				<div className="flex flex-wrap item-center justify-center p-10">
					{tags.map((tag, index) => {
						return Tag({ tag, index });
					})}
				</div>
				<div className="flex flex-wrap justify-center px-20 ">
					{member.map((member, index) => {
						return Member({ member, index });
					})}
				</div>
			</div>
		</main>
	);
}
