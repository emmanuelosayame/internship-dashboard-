import { Icon, IconProps } from '@chakra-ui/react';

export const JobIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
    />
  </Icon>
);

export const SettingsIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76'
      // stroke='#1E1E1E'

      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.88 20.5798L7.97 21.2098C8.76 21.6798 9.78 21.3998 10.25 20.6098L10.36 20.4198C11.26 18.8498 12.74 18.8498 13.65 20.4198L13.76 20.6098C14.23 21.3998 15.25 21.6798 16.04 21.2098L17.77 20.2198C18.68 19.6998 18.99 18.5298 18.47 17.6298C17.56 16.0598 18.3 14.7798 20.11 14.7798C21.15 14.7798 22.01 13.9298 22.01 12.8798V11.1198C22.01 10.0798 21.16 9.21982 20.11 9.21982C19.1 9.21982 18.42 8.81982 18.18 8.18982C17.99 7.69982 18.07 7.05982 18.47 6.36982C18.99 5.45982 18.68 4.29982 17.77 3.77982L16.96 3.31982'
      // stroke='#1E1E1E'

      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.64 3.57994C12.74 5.14994 11.26 5.14994 10.35 3.57994L10.24 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199V12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299'
      // stroke='#1E1E1E'

      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const EditIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 20 20'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='20'
    height='20'
    {...props}
  >
    <g opacity='0.5'>
      <path
        d='M12.5 18.4584H7.50002C5.29492 18.4584 3.84036 17.9854 2.92753 17.0726C2.0147 16.1597 1.54169 14.7052 1.54169 12.5001V7.50008C1.54169 5.29498 2.0147 3.84042 2.92753 2.92759C3.84036 2.01476 5.29492 1.54175 7.50002 1.54175H9.16669C9.19683 1.54175 9.22812 1.55403 9.25376 1.57968C9.2794 1.60532 9.29169 1.6366 9.29169 1.66675C9.29169 1.6969 9.2794 1.72818 9.25376 1.75382C9.22812 1.77946 9.19683 1.79175 9.16669 1.79175H7.50002C5.54391 1.79175 4.06893 2.13449 3.10168 3.10174C2.13442 4.06899 1.79169 5.54397 1.79169 7.50008V12.5001C1.79169 14.4562 2.13442 15.9312 3.10168 16.8984C4.06893 17.8657 5.54391 18.2084 7.50002 18.2084H12.5C14.4561 18.2084 15.9311 17.8657 16.8984 16.8984C17.8656 15.9312 18.2084 14.4562 18.2084 12.5001V10.8334C18.2084 10.8033 18.2206 10.772 18.2463 10.7463C18.2719 10.7207 18.3032 10.7084 18.3334 10.7084C18.3635 10.7084 18.3948 10.7207 18.4204 10.7463C18.4461 10.772 18.4584 10.8033 18.4584 10.8334V12.5001C18.4584 14.7052 17.9853 16.1597 17.0725 17.0726C16.1597 17.9854 14.7051 18.4584 12.5 18.4584Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
      <path
        d='M5.76971 12.6726L5.76997 12.6708L6.12831 10.1624L6.12864 10.16C6.18003 9.78747 6.44529 9.26186 6.71188 8.99527L13.2785 2.4286C14.0519 1.65527 14.7676 1.3313 15.425 1.3313C16.0824 1.3313 16.7981 1.65527 17.5714 2.4286C18.414 3.27118 18.7253 4.05777 18.6606 4.78606C18.6003 5.38199 18.2796 6.0128 17.5734 6.71121L17.5714 6.71316L11.0048 13.2798C10.7382 13.5464 10.2126 13.8117 9.84001 13.8631L9.83762 13.8634L7.32928 14.2217L7.30826 14.2247L7.28757 14.2295C7.24324 14.2397 7.19092 14.2417 7.08333 14.2417C6.69752 14.2417 6.35983 14.104 6.11804 13.8693C5.83714 13.5869 5.69807 13.161 5.76971 12.6726ZM13.4563 2.60331L13.4548 2.60483L6.88811 9.17149L7.24166 9.52505L6.88811 9.1715C6.75511 9.30449 6.64139 9.48898 6.56075 9.64906C6.48006 9.80922 6.4005 10.0085 6.37248 10.1907L6.37245 10.1907L6.37169 10.196L6.01335 12.7043L6.01302 12.7067C5.96698 13.0405 6.02244 13.4213 6.29644 13.6953C6.57045 13.9693 6.95124 14.0247 7.28498 13.9787L7.28737 13.9784L9.79571 13.62L9.79571 13.6201L9.80102 13.6192C9.98186 13.5914 10.1825 13.5126 10.3444 13.4316C10.5013 13.3532 10.6902 13.2387 10.8241 13.0997L17.3869 6.53694C17.9591 5.96475 18.3402 5.3773 18.3979 4.75448L18.3979 4.75434C18.4682 3.99246 18.0598 3.27829 17.3892 2.59881L17.3892 2.59881L17.3869 2.5965C16.6709 1.8805 15.9699 1.52632 15.2404 1.59384C14.539 1.65876 13.9588 2.10507 13.4563 2.60331Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
      <path
        d='M16.5417 7.69173C16.5361 7.69173 16.5315 7.69131 16.5287 7.6909L16.5219 7.68863L16.5104 7.68542C14.4871 7.11611 12.8768 5.50632 12.3069 3.48323C12.2894 3.418 12.3232 3.34734 12.3964 3.32244C12.4645 3.30655 12.5258 3.34547 12.5429 3.40764L12.5429 3.40764L12.5437 3.41063C13.0909 5.35319 14.6302 6.89247 16.5728 7.43967L16.5728 7.43968L16.5758 7.4405C16.6339 7.45647 16.6805 7.52467 16.6596 7.60082L16.6583 7.60545C16.6503 7.63586 16.6352 7.65498 16.6179 7.66787C16.5992 7.68183 16.573 7.69173 16.5417 7.69173Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
    </g>
  </Icon>
);

export const CopyIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 20 20'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='20'
    height='20'
    {...props}
  >
    <g opacity='0.5'>
      <path
        d='M9.24999 18.4584H5.74999C4.18327 18.4584 3.16345 18.1085 2.5275 17.4726C1.89156 16.8366 1.54166 15.8168 1.54166 14.2501V10.7501C1.54166 9.18336 1.89156 8.16354 2.5275 7.52759C3.16345 6.89165 4.18327 6.54175 5.74999 6.54175H9.24999C10.8167 6.54175 11.8365 6.89165 12.4725 7.52759C13.1084 8.16354 13.4583 9.18336 13.4583 10.7501V14.2501C13.4583 15.8168 13.1084 16.8366 12.4725 17.4726C11.8365 18.1085 10.8167 18.4584 9.24999 18.4584ZM5.74999 6.79175C4.42878 6.79175 3.38777 7.00936 2.69852 7.69861C2.00927 8.38786 1.79166 9.42887 1.79166 10.7501V14.2501C1.79166 15.5713 2.00927 16.6123 2.69852 17.3016C3.38777 17.9908 4.42878 18.2084 5.74999 18.2084H9.24999C10.5712 18.2084 11.6122 17.9908 12.3015 17.3016C12.9907 16.6123 13.2083 15.5713 13.2083 14.2501V10.7501C13.2083 9.42887 12.9907 8.38786 12.3015 7.69861C11.6122 7.00936 10.5712 6.79175 9.24999 6.79175H5.74999Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
      <path
        d='M13.4583 12.7084V13.2084H13.9583H14.25C15.5712 13.2084 16.6122 12.9908 17.3015 12.3016C17.9907 11.6123 18.2083 10.5713 18.2083 9.25008V5.75008C18.2083 4.42887 17.9907 3.38786 17.3015 2.69861C16.6122 2.00936 15.5712 1.79175 14.25 1.79175H10.75C9.42878 1.79175 8.38777 2.00936 7.69852 2.69861C7.00927 3.38786 6.79166 4.42887 6.79166 5.75008V6.04175V6.54175H7.29166H9.24999C10.8167 6.54175 11.8365 6.89165 12.4725 7.52759C13.1084 8.16354 13.4583 9.18336 13.4583 10.7501V12.7084ZM14.25 13.4584H13.3333C13.3032 13.4584 13.2719 13.4461 13.2463 13.4205C13.2206 13.3948 13.2083 13.3636 13.2083 13.3334V10.7501C13.2083 9.42887 12.9907 8.38786 12.3015 7.69861C11.6122 7.00936 10.5712 6.79175 9.24999 6.79175H6.66666C6.63651 6.79175 6.60523 6.77946 6.57958 6.75382C6.55394 6.72818 6.54166 6.6969 6.54166 6.66675V5.75008C6.54166 4.18336 6.89156 3.16354 7.5275 2.52759C8.16345 1.89165 9.18327 1.54175 10.75 1.54175H14.25C15.8167 1.54175 16.8365 1.89165 17.4725 2.52759C18.1084 3.16354 18.4583 4.18336 18.4583 5.75008V9.25008C18.4583 10.8168 18.1084 11.8366 17.4725 12.4726C16.8365 13.1085 15.8167 13.4584 14.25 13.4584Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
    </g>
  </Icon>
);

export const TrashIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 20 20'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='20'
    height='20'
    {...props}
  >
    <g opacity='0.5'>
      <path
        d='M2.48187 4.85603L2.48211 4.85601L4.18211 4.68935L4.18382 4.68917C8.57175 4.24378 13.0273 4.41608 17.5095 4.856L17.5098 4.85603C17.5726 4.86216 17.6259 4.92235 17.619 4.99318L17.6189 4.99317L17.6181 5.00338C17.6139 5.05834 17.5651 5.10839 17.5 5.10839H17.4999H17.4998H17.4997H17.4996H17.4995H17.4994H17.4993H17.4992H17.4991H17.499H17.4989H17.4988H17.4987H17.4986H17.4985H17.4984H17.4983H17.4982H17.4981H17.498H17.4979H17.4978H17.4977H17.4976H17.4975H17.4974H17.4973H17.4972H17.4971H17.497H17.4969H17.4968H17.4967H17.4966H17.4965H17.4964H17.4963H17.4961H17.496H17.4959H17.4958H17.4957H17.4956H17.4955H17.4954H17.4953H17.4952H17.4951H17.495H17.4949H17.4948H17.4947H17.4946H17.4944H17.4943H17.4942H17.4941H17.494H17.4939H17.4938H17.4937H17.4936H17.4935H17.4934H17.4933H17.4931H17.493H17.4929H17.4928H17.4927H17.4926H17.4925H17.4924H17.4923H17.4922H17.492H17.4919H17.4918H17.4917H17.4916H17.4915H17.4914H17.4913H17.4912H17.491H17.4909H17.4908H17.4907H17.4906H17.4905H17.4904H17.4902H17.4901H17.49H17.4899H17.4898H17.4897H17.4896H17.4894H17.4893H17.4892H17.4891H17.489H17.4889H17.4888H17.4886H17.4885H17.4884H17.4883H17.4882H17.4881H17.4879H17.4878H17.4877H17.4876H17.4875H17.4874H17.4872H17.4871H17.487H17.4869H17.4868H17.4867H17.4865H17.4864H17.4863H17.4862H17.4861H17.4859H17.4858H17.4857H17.4856H17.4855H17.4853H17.4852H17.4851H17.485H17.4849H17.4847H17.4846H17.4845H17.4844H17.4843H17.4841H17.484H17.4839H17.4838H17.4837H17.4835H17.4834H17.4833H17.4832H17.483H17.4829H17.4828H17.4827H17.4825H17.4824H17.4823H17.4822H17.4821H17.4819H17.4818H17.4817H17.4816H17.4814H17.4813H17.4812H17.4811H17.4809H17.4808H17.4807H17.4806H17.4804H17.4803H17.4802H17.4801H17.4799H17.4798H17.4797H17.4796H17.4794H17.4793H17.4792H17.4791H17.4789H17.4788H17.4787H17.4785H17.4784H17.4783H17.4782H17.478H17.4779H17.4778H17.4777H17.4775H17.4774H17.4773H17.4771H17.477H17.4769H17.4768H17.4766H17.4765H17.4764H17.4762H17.4761H17.476H17.4759H17.4757H17.4756H17.4755H17.4753H17.4752H17.4751H17.4749H17.4748H17.4747H17.4746H17.4744H17.4743H17.4742H17.474H17.4739H17.4738H17.4736H17.4735H17.4734H17.4732H17.4731H17.473H17.4728H17.4727H17.4726H17.4724H17.4723H17.4722H17.4721H17.4719H17.4718H17.4717H17.4715H17.4714H17.4713H17.4711H17.471H17.4709H17.4707H17.4706H17.4705H17.4703H17.4702H17.4701H17.4699H17.4698H17.4696H17.4695H17.4694H17.4692H17.4691H17.469H17.4688H17.4687H17.4686H17.4684H17.4683H17.4682H17.468H17.4679H17.4678H17.4676H17.4675H17.4674H17.4672H17.4671H17.4669H17.4668H17.4667H17.4665H17.4664H17.4663H17.4661H17.466H17.4659H17.4657H17.4656H17.4654H17.4653H17.4652H17.465H17.4649H17.4648H17.4646H17.4645H17.4643H17.4642H17.4641H17.4639H17.4638H17.4636H17.4635H17.4634H17.4632H17.4631H17.463H17.4628H17.4627H17.4625H17.4624H17.4623H17.4621H17.462H17.4618H17.4617H17.4616H17.4614H17.4613H17.4612H17.461H17.4609H17.4607H17.4606H17.4605H17.4603H17.4602H17.46H17.4599H17.4598H17.4596H17.4595H17.4593H17.4592H17.459H17.4589H17.4588H17.4586H17.4585H17.4583H17.4583C13.0394 4.66671 8.61197 4.4989 4.21706 4.94419C4.21679 4.94422 4.21652 4.94425 4.21625 4.94428L2.51925 5.11065C2.5191 5.11066 2.51895 5.11068 2.5188 5.11069C2.43863 5.1181 2.37938 5.06403 2.37274 4.99432C2.36543 4.91759 2.41578 4.86248 2.48187 4.85603Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
      <path
        d='M7.06588 4.26668C7.06578 4.26668 7.06569 4.26667 7.06559 4.26667L7.06118 4.2659C7.03205 4.2608 7.00258 4.24316 6.98125 4.2132C6.96016 4.18357 6.95477 4.15306 6.95917 4.12794L6.95975 4.12456L7.14308 3.03289L7.14318 3.03228C7.21324 2.61194 7.28017 2.26933 7.48968 2.01048C7.67134 1.78604 8.03612 1.54175 8.90832 1.54175H11.0917C11.9628 1.54175 12.3302 1.79315 12.514 2.02402C12.7256 2.28979 12.7909 2.63668 12.8565 3.03887L12.8565 3.03888L12.857 3.04184L13.0403 4.12518L13.0405 4.1259C13.0462 4.15931 13.0381 4.19231 13.0187 4.21945C12.9993 4.24677 12.9743 4.26043 12.9508 4.26395L12.9508 4.26385L12.9408 4.26555C12.9074 4.27125 12.8744 4.26314 12.8473 4.24382C12.82 4.22437 12.8063 4.19938 12.8028 4.17591L12.8029 4.1759L12.8013 4.16665L12.6183 3.08535L12.616 3.07103C12.5893 2.90501 12.5618 2.73412 12.521 2.58955C12.4772 2.43432 12.4033 2.25162 12.2463 2.1009C12.0866 1.94754 11.894 1.87766 11.7105 1.84249C11.5332 1.8085 11.3266 1.80008 11.1 1.80008H8.91665C8.69287 1.80008 8.48859 1.80681 8.31458 1.8375C8.13497 1.86917 7.94059 1.93399 7.7781 2.08608C7.61798 2.23595 7.54364 2.41986 7.49958 2.57398C7.45921 2.7152 7.43081 2.88398 7.40284 3.0502C7.40154 3.05791 7.40024 3.06562 7.39895 3.07332L7.20763 4.15464L7.20758 4.15463L7.20643 4.16171C7.19661 4.2223 7.14385 4.26675 7.08332 4.26675L7.06588 4.26668Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
      <path
        d='M4.16563 7.62619L4.16564 7.62619L4.16533 7.62191C4.16329 7.594 4.17242 7.56366 4.19632 7.53648C4.21915 7.51051 4.24928 7.49478 4.28055 7.49097C4.3595 7.49034 4.41249 7.54551 4.41789 7.61021L4.95937 15.9989L4.95935 15.9989L4.95963 16.0028L4.96132 16.0262C4.98291 16.3247 5.00402 16.6167 5.05291 16.8685C5.10412 17.1323 5.19483 17.4064 5.39329 17.638C5.79414 18.1056 6.46409 18.2084 7.325 18.2084H12.675C13.5391 18.2084 14.2118 18.106 14.613 17.638C14.812 17.4057 14.9021 17.1307 14.9522 16.8663C15.0003 16.6125 15.0196 16.3183 15.0394 16.0178L15.0406 15.9996L15.0406 15.9989L15.5821 7.61029C15.5873 7.54891 15.6449 7.49045 15.7196 7.49097C15.7942 7.49946 15.839 7.56107 15.8346 7.62277L15.8344 7.62619L15.2929 16.0149C15.2929 16.0154 15.2928 16.0159 15.2928 16.0164C15.2449 16.6951 15.1906 17.271 14.883 17.7007C14.6082 18.0846 14.0403 18.4584 12.675 18.4584H7.325C5.9597 18.4584 5.39182 18.0846 5.11698 17.7007C4.80935 17.271 4.75507 16.695 4.7072 16.0164C4.70716 16.0159 4.70713 16.0154 4.70709 16.0149L4.16563 7.62619Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
      <path
        d='M11.3833 13.875H8.60834C8.57819 13.875 8.54691 13.8627 8.52127 13.8371C8.49562 13.8114 8.48334 13.7801 8.48334 13.75C8.48334 13.7199 8.49562 13.6886 8.52127 13.6629C8.54691 13.6373 8.57819 13.625 8.60834 13.625H11.3833C11.4135 13.625 11.4448 13.6373 11.4704 13.6629C11.4961 13.6886 11.5083 13.7199 11.5083 13.75C11.5083 13.7801 11.4961 13.8114 11.4704 13.8371C11.4448 13.8627 11.4135 13.875 11.3833 13.875Z'
        fill='#292D32'
        stroke='#1E1E1E'
      />
      <path
        d='M12.0833 11.0417H7.91666C7.57499 11.0417 7.29166 10.7584 7.29166 10.4167C7.29166 10.0751 7.57499 9.79175 7.91666 9.79175H12.0833C12.425 9.79175 12.7083 10.0751 12.7083 10.4167C12.7083 10.7584 12.425 11.0417 12.0833 11.0417Z'
        fill='#292D32'
      />
    </g>
  </Icon>
);

export const SmsIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 20 20'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='20'
    height='20'
    {...props}
  >
    <path
      d='M18.3333 10.8165V12.9165C18.3333 15.8332 16.6666 17.0832 14.1666 17.0832H5.83329C3.33329 17.0832 1.66663 15.8332 1.66663 12.9165V7.08317C1.66663 4.1665 3.33329 2.9165 5.83329 2.9165H14.1666C16.6666 2.9165 18.3333 4.1665 18.3333 7.08317'
      stroke='#8A8B8C'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.1667 7.5L11.5584 9.58333C10.7 10.2667 9.2917 10.2667 8.43337 9.58333L5.83337 7.5'
      stroke='#8A8B8C'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const LockIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M5 8.33317V6.6665C5 3.90817 5.83333 1.6665 10 1.6665C14.1667 1.6665 15 3.90817 15 6.6665V8.33317'
      stroke='#8A8B8C'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.91663 13.3333C7.91663 14.4833 8.84996 15.4167 9.99996 15.4167C11.15 15.4167 12.0833 14.4833 12.0833 13.3333C12.0833 12.1833 11.15 11.25 9.99996 11.25'
      stroke='#8A8B8C'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.3333 14.1668V12.5002C18.3333 9.16683 17.5 8.3335 14.1666 8.3335H5.83329C2.49996 8.3335 1.66663 9.16683 1.66663 12.5002V14.1668C1.66663 17.5002 2.49996 18.3335 5.83329 18.3335H14.1666C15.6333 18.3335 16.6166 18.1752 17.2583 17.7085'
      stroke='#8A8B8C'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const EyeIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 20 20'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='20'
    height='20'
    {...props}
  >
    <path
      d='M7.52506 11.6666C7.20006 11.1916 7.01672 10.6166 7.01672 9.99993C7.01672 8.34993 8.35006 7.0166 10.0001 7.0166C11.6501 7.0166 12.9834 8.34993 12.9834 9.99993C12.9834 11.6499 11.6501 12.9833 10.0001 12.9833'
      stroke='#8A8B8C'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.6333 4.65007C13.225 3.65007 11.6417 3.1084 9.99999 3.1084C7.05833 3.1084 4.31666 4.84173 2.40833 7.84173C1.65833 9.01673 1.65833 10.9917 2.40833 12.1667C4.31666 15.1667 7.05833 16.9001 9.99999 16.9001C12.9417 16.9001 15.6833 15.1667 17.5917 12.1667C18.3417 10.9917 18.3417 9.01673 17.5917 7.84173'
      stroke='#8A8B8C'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const EyeSlashIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
    />
  </Icon>
);

export const SquarePlusIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z'
    />
  </Icon>
);

export const AddSquareIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 20 20'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M12.4917 10H13.3333'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.66666 10H9.84166'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 13.3334V6.66675'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M1.66666 10.8667V12.5001C1.66666 16.6667 3.33333 18.3334 7.5 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5001V7.50008C18.3333 3.33341 16.6667 1.66675 12.5 1.66675H7.5C3.33333 1.66675 1.66666 3.33341 1.66666 7.50008'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const Square2StackIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
    />
  </Icon>
);

export const ArrowLeftIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
    />
  </Icon>
);

// Joshua change the checkIcon
export const CheckIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M15 10.38L16.12 9.25'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M7.88 12L10.62 14.75L13.17 12.21'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);
// Joshua change the CircleIcon
export const CircleIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M4.5 6C3.25 7.67 2.5 9.75 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2C11.07 2 9.7 2.3 8.47 2.85'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);

export const CautionIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
    />
  </Icon>
);
// Joshua change the MonitorIcon
export const MonitorIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path d='M22 10.63V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H17.55C21.11 2 22 2.89 22 6.44' />
    <path d='M12 17.2202V22.0002' />
    <path d='M2 13H22' />
    <path d='M7.5 22H16.5' />
  </Icon>
);
// Joshua change the MobileAppIcon
export const MobileAppIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M20 11.03V17C20 21 19 22 15 22H9C5 22 4 21 4 17V7C4 3 5 2 9 2H15C19 2 20 3 20 7'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14 5.5H10'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12 19.1C12.856 19.1 13.55 18.406 13.55 17.55C13.55 16.694 12.856 16 12 16C11.1439 16 10.45 16.694 10.45 17.55C10.45 18.406 11.1439 19.1 12 19.1Z'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);

export const GrowthIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M17.97 22H22'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M2 2V19C2 20.66 3.34 22 5 22H13.98'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M19.99 8.17999L21 7'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M5 17.0002L9.59 11.6402C10.35 10.7602 11.7 10.7002 12.52 11.5302L13.47 12.4802C14.29 13.3002 15.64 13.2502 16.4 12.3702L17.55 11.0202'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);
export const MarketingIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M1 6.26001C1 2.70001 1.75 1.40003 4.52 1.09003C5.04 1.02003 5.61 1 6.27 1H15.74C16.39 1 16.97 1.02003 17.49 1.09003C20.26 1.40003 21.01 2.70001 21.01 6.26001V12.58C21.01 16.14 20.26 17.44 17.49 17.75C16.97 17.82 16.4 17.84 15.74 17.84H6.27C5.62 17.84 5.04 17.82 4.52 17.75C1.75 17.44 1 16.14 1 12.58V10.1'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12.58 7.31982H16.26'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M5.73999 13.1099H5.75998H16.27'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M6 21H16'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);

export const PrototypeIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M3.17004 7.43994L12 12.5499L20.77 7.46994'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M12 21.61V12.54'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M2.39001 13.2501V14.8301C2.39001 16.2101 3.38001 17.8901 4.59001 18.5601L9.93001 21.5301C11.07 22.1601 12.94 22.1601 14.08 21.5301L19.42 18.5601C20.63 17.8901 21.62 16.2101 21.62 14.8301V9.17006C21.62 7.79006 20.63 6.11006 19.42 5.44006L14.08 2.47006C12.94 1.84006 11.07 1.84006 9.93001 2.47006L4.59001 5.44006C3.38001 6.11006 2.39001 7.79006 2.39001 9.17006'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);
export const DataIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M6 6.25V8.25'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M10 6.25V8.25'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12H18'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M6 16V18'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M10 16V18'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14 7.25H18'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14 17H18'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);
export const CustomteamIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M18.67 18.67L20.89 17.56V14.78M14.22 9.78L12 10.89L14.22 9.78ZM12 10.89L9.77998 9.78L12 10.89ZM12 10.89V13.67V10.89ZM20.89 6.44L18.67 7.55L20.89 6.44ZM20.89 6.44L18.67 5.33L20.89 6.44ZM20.89 6.44V9.22V6.44ZM14.22 3.11L12 2L9.77998 3.11H14.22ZM3.10999 6.44L5.32999 5.33L3.10999 6.44ZM3.10999 6.44L5.32999 7.55L3.10999 6.44ZM3.10999 6.44V9.22V6.44ZM12 22L9.77998 20.89L12 22ZM12 22L14.22 20.89L12 22ZM12 22V19.22V22ZM5.32999 18.67L3.10999 17.56V14.78L5.32999 18.67Z'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);
// Joshua change the CalenderDaysIcon
export const CalenderDaysIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M8 2V5'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M16 2V5'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M3.5 9.08984H20.5'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M11.9955 13.7002H12.0045'
      stroke='#793EF5'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M8.29431 13.7002H8.30329'
      stroke='#793EF5'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M8.29431 16.7002H8.30329'
      stroke='#793EF5'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);

export const XmarkIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='4'
    height='4'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6 18L18 6M6 6l12 12'
    />
  </Icon>
);

export const AddDocIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z'
      clipRule='evenodd'
    />
    <path d='M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z' />
  </Icon>
);

export const PhotoIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='3'
    height='3'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
      clipRule='evenodd'
    />
  </Icon>
);

export const UserIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
    />
  </Icon>
);

export const TickSquare = (props: IconProps) => (
  <Icon
    viewBox='0 0 20 20'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='16.67px'
    height='16.67px'
    {...props}
  >
    <path
      d='M1.66663 10.7998V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6666 1.6665 12.5 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984'
      stroke='#793EF5'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.5 8.65016L13.4333 7.7085'
      stroke='#793EF5'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.56665 10L8.84998 12.2917L10.975 10.175'
      stroke='#793EF5'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const MedalSilver = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M16.25 3.44C17.92 4.72 19 6.73 19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.25 18.4699L19.6 18.8599C19.23 18.9499 18.94 19.2299 18.86 19.5999L18.51 21.0699C18.32 21.8699 17.3 22.1099 16.77 21.4799L12 15.9999L7.22996 21.4899C6.69996 22.1199 5.67996 21.8799 5.48996 21.0799L5.13996 19.6099C5.04996 19.2399 4.75996 18.9499 4.39996 18.8699L2.74996 18.4799C1.98996 18.2999 1.71996 17.3499 2.26996 16.7999L6.16996 12.8999C7.24996 14.4999 8.95996 15.6299 10.95 15.9199C11.29 15.9799 11.64 16.0099 12 16.0099C12.36 16.0099 12.71 15.9799 13.05 15.9199C15.04 15.6299 16.75 14.4999 17.83 12.8999L21.73 16.7999C22.28 17.3399 22.01 18.2899 21.25 18.4699Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const DashboardIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M15.73 2C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9V4.1C22 2.6 21.36 2 19.77 2'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.23 22C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

// export const BookIcon = (props: IconProps) => (
//   <Icon
//     viewBox='0 0 24 24'
//     strokeWidth='1.5'
//     stroke='currentColor'
//     fill='none'
//     fillRule='evenodd'
//     clipRule='evenodd'
//     width='5'
//     height='5'
//     {...props}>
//     <path
//       d='M22 10.9899V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399V15.0199'
//       stroke='#1E1E1E'
//       strokeWidth='1.5'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//     <path
//       d='M12 5.48999V20.49'
//       stroke='#1E1E1E'
//       strokeWidth='1.5'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//     <path
//       d='M7.75 8.48999H5.5'
//       stroke='#1E1E1E'
//       strokeWidth='1.5'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//     <path
//       d='M8.5 11.49H5.5'
//       stroke='#1E1E1E'
//       strokeWidth='1.5'
//       strokeLinecap='round'
//       strokeLinejoin='round'
//     />
//   </Icon>
// );

export const BriefCaseIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M21.3699 14L21.7099 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43'
      // stroke='#1E1E1E'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6'
      // stroke='#1E1E1E'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z'
      // stroke='#1E1E1E'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.65 11C19.34 12.68 16.7 13.68 14 14.02'
      // stroke='#1E1E1E'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03'
      // stroke='#292D32'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const BookIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M22 10.9899V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399V15.0199'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 5.48999V20.49'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.75 8.48999H5.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.5 11.49H5.5'
      stroke='currentColor'
      // stroke='#1E1E1E'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);
export const UntickIcon = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='24px'
    height='24px'
    {...props}
  >
    <path
      d='M2 12.96V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9'
      stroke='#793EF5'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
);

export const ArrowLeft = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    fillRule='evenodd'
    clipRule='evenodd'
    width='5'
    height='5'
    {...props}
  >
    <path
      d='M11.165 6.91821L4.08331 13.9999L11.165 21.0815'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14.9566 14H4.08331'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M23.7183 14H19.6583'
      stroke='#793EF5'
      stroke-width='1.5'
      stroke-miterlimit='10'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Icon>
);
<<<<<<< HEAD
export const Bars3CL = (props: IconProps) => (
  <Icon
    viewBox='0 0 24 24'
    strokeWidth='1'
    stroke='currentColor'
    fill='currentColor'
    fillRule='evenodd'
    clipRule='evenodd'
    width='6'
    height='6'
    {...props}>
    <path
      fillRule='evenodd'
      d='M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
      clipRule='evenodd'
    />
  </Icon>
);

<svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 24 24'
  fill='currentColor'
  className='w-6 h-6'>
  <path
    fillRule='evenodd'
    d='M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
    clipRule='evenodd'
  />
</svg>;
=======
>>>>>>> Icons-update
